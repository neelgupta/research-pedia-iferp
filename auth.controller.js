const { response400, response200 } = require("../../lib/response-messages");
const { createToken } = require("../../lib/token-manager");
const catchAsyncError = require("../../middleware/catchAsyncError");
const { userServices } = require("../../service");
const { msg, hashPassword, userType } = require("../../utils/constant");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const {
  forgotPasswordMail,
  registrationEmail,
  userRegistrationEmail,
} = require("../../utils/emailTemplates");
const JWTAuth = require("../../lib/token-manager");

const { Users, StudentMember } = require("../../models");

const signUpWithGoogle = catchAsyncError(async (req, res) => {
  console.log(`signUpWithGoogle()`);
  const user = req.user;

  let existingUser = await Users.findOne({ googleId: user.googleId });

  let existingstudent = await StudentMember.findOne({
    googleId: user.googleId,
  });

  if (!existingUser) {
    existingUser = new Users({
      googleId: user.googleId,
      name: user.name,
      email: user.email,
      profilePicture: user.profilePicture,
      phoneNumber: null,
      isVerified: true,
    });

    await existingUser.save();
  }
  if (!existingstudent) {
    existingstudent = new StudentMember({
      googleId: user.googleId,
      name: user.name,
      email: user.email,
      profilePicture: user.profilePicture,
      phoneNumber: null,
      isVerified: true,
      role: userType.STUDENT_MEMBER,
    });

    await existingstudent.save();
  }

  const tokenPayload = {
    id: existingUser._id,
    email: existingUser.email,
    name: existingUser.name,
    role: existingUser.role,
  };

  const token = await createToken(tokenPayload);

  return response200(res, "Login successful via Google", {
    id: existingUser._id,
    name: existingUser.name,
    email: existingUser.email,
    profilePicture: existingUser.profilePicture,
    token,
  });
});

const signUp = catchAsyncError(async (req, res) => {
  const { name, email, role, phoneNumber, password } = req.body;
  const existingUser = await userServices.findUser({ email });
  if (existingUser) return response400(res, msg.emailAlreadyExists);

  const existingProfessionalMember = await userServices.findProfessionalMember({
    email,
  });
  if (existingProfessionalMember)
    return response400(res, msg.professionalEmailAlreadyExist);

  const existingStudentMember = await userServices.findProfessionalMember({
    email,
  });
  if (existingStudentMember)
    return response400(res, msg.studentEmailAlreadyExist);

  const existingInstitutionalMember =
    await userServices.findInstitutionalMember({
      email,
    });
  if (existingInstitutionalMember)
    return response400(res, msg.instutionalEmailAlreadyExist);

  const hashedPassword = await hashPassword(password);

  const user = await userServices.createUser({
    name,
    email,
    password: hashedPassword,
    role,
    phoneNumber,
  });

  const verificationCode = crypto.randomInt(1000, 10000);

  user.verificationCode = verificationCode;

  user.verificationCodeExpires = Date.now() + 10 * 60 * 1000;

  await user.save();

  let newUser;

  switch (role) {
    case userType.STUDENT_MEMBER:
      newUser = await userServices.createStudent({
        userId: user._id,
        name,
        email,
        role,
        phoneNumber,
      });
      break;
    case userType.PROFESSIONAL_MEMBER:
      newUser = await userServices.createProfessional({
        userId: user._id,
        name,
        email,
        role,
        phoneNumber,
      });
      break;
    case userType.INSTITUTIONAL_MEMBER:
      newUser = await userServices.createInstitutional({
        userId: user._id,
        name,
        email,
        role,
        phoneNumber,
      });
      break;
    default:
      return response400(res, msg.invalidRole);
  }

  await newUser.save();

  const tokenPayload = {
    id: newUser._id,
    userId: user._id,
    email: newUser.email,
    name: newUser.name,
    role: newUser.role,
  };

  const token = await createToken(tokenPayload);
  const verificationUrl = `${process.env.BACKEND_URL}/api/v1/user/auth/verify-email/${process.env.EMAIL_VERIFICATION_SECRET}${token}`;

  await userRegistrationEmail({
    email: newUser.email,
    name: newUser.name,
    verificationUrl: verificationUrl,
  });

  const tokenAuthToken = {
    id: user._id,
    roleId: newUser._id,
    email: user.email,
    name: user.name,
    role: user.role,
  };

  const authToken = await createToken(tokenAuthToken);


  const userPayload = {
    id: user._id,
    roleId: newUser._id,
    email: user.email,
    name: user.name,
    role: user.role,
    isPersonalDetailsCompleted: newUser.isPersonalDetailsCompleted,
    token: authToken,
    isFirstLogin : user.isFirstLogin
  };
  user.isFirstLogin = false
  await user.save()
  // return response200(res, msg.loginSuccess, userPayload);

  return response200(res, msg.signupSuccess, userPayload);
});

const verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;
    const result = await userServices.emailVeification(token, res);
    if (result.error) {
      return response400(res, result.message, result.statusCode);
    }
    return response200(res, result);
  } catch (error) {
    return response400(res, "errEmail");
  }
};

const verifyCode = catchAsyncError(async (req, res) => {
  const { email, verificationCode } = req.body;

  const user = await userServices.findUser({ email });

  if (!user) return response400(res, msg.userDetailsNotFound);

  if (user.verificationCode !== parseInt(verificationCode)) {
    return response400(res, "Invalid verification code.");
  }

  if (user.verificationCodeExpires < Date.now()) {
    return response400(res, "Verification code has expired.");
  }
  await Users.updateOne(
    { _id: user._id },
    {
      // isVerified: true,
      verificationCode: undefined,
      verificationCodeExpires: undefined,
    }
  );

  return response200(res, "Verification done successfully!", user);
});

const login = catchAsyncError(async (req, res) => {
  const { email, password } = req.body;

  const user = await userServices.findUser(
    { email },
    { select: "_id name email isActive role password isVerified isFirstLogin" }
  );

  if(!user){
    return response400(res, msg.userDetailsNotFound);
  }

  const role = user?.role;

  let roleId;
  switch (role) {
    case userType.STUDENT_MEMBER:
      roleId = await userServices.findStudentMember({
        userId: user._id,
      });
      break;
    case userType.PROFESSIONAL_MEMBER:
      roleId = await userServices.findProfessionalMember({
        userId: user._id,
      });
      break;
    case userType.INSTITUTIONAL_MEMBER:
      roleId = await userServices.findInstitutionalMember({
        userId: user._id,
      });
      break;
      default:
        return response400(res, msg.invalidRole);
      }
      
  // if (!user.isVerified) return response400(res, msg.isNotVerify);

  if (!user) return response400(res, msg.invalidCredentials);

  if (!bcrypt.compareSync(password, user.password))
    return response400(res, msg.invalidCredentials);

  console.log(roleId,"ROLE ID")

  const tokenPayload = {
    id: user._id,
    roleId: roleId._id,
    email: user.email,
    name: user.name,
    role: user.role,
  };

  const token = await createToken(tokenPayload);

  console.log(user,"USER")

  const userPayload = {
    id: user._id,
    roleId: roleId._id,
    email: user.email,
    name: user.name,
    role: user.role,
    isPersonalDetailsCompleted: roleId.isPersonalDetailsCompleted,
    token: token,
    isFirstLogin : user.isFirstLogin
  };
  user.isFirstLogin = false
  await user.save()
  return response200(res, msg.loginSuccess, userPayload);
});

// const login = catchAsyncError(async (req, res) => {
//   const { email, password } = req.body;

//   // Check student table
//   let user = await userServices.findStudentMember(
//     { email },
//     { select: "_id name email isActive role password isVerified" }
//   );

//   // Check if user not found in student, then check professionalMember
//   if (!user) {
//     user = await userServices.findProfessionalMember(
//       { email },
//       { select: "_id name email isActive role password isVerified" }
//     );
//   }

//   // If still not found, check institutionalMember
//   if (!user) {
//     user = await userServices.findInstitutionalMember(
//       { email },
//       { select: "_id name email isActive role password isVerified" }
//     );
//   }

//   // If user is still not found
//   if (!user) {
//     return response400(res, msg.invalidCredentials);
//   }

//   // Check if the user is verified
//   if (!user.isVerified) {
//     return response400(res, msg.isNotVerify);
//   }

//   // Compare password
//   if (!bcrypt.compareSync(password, user.password)) {
//     return response400(res, msg.invalidCredentials);
//   }

//   // Prepare token payload
//   const tokenPayload = {
//     id: user._id,
//     email: user.email,
//     name: user.name,
//     role: user.role,
//   };
//   const token = await createToken(tokenPayload);

//   // Prepare the user payload
//   const userPayload = {
//     id: user._id,
//     email: user.email,
//     name: user.name,
//     role: user.role,
//     token: token,
//   };

//   // Return success response
//   return response200(res, msg.loginSuccess, userPayload);
// });

const forgotPassword = catchAsyncError(async (req, res) => {
  const { email } = req.body;

  const user = await userServices.findUser(
    { email },
    { select: "_id name email isActive role password isVerified" }
  );

  if (!user) return response400(res, msg.userDetailsNotFound);

  // const tokenPayload = {
  //   id: user._id,
  //   email: user.email,
  //   name: user.name,
  //   role: user.role,
  // };

  // const token = await createToken(tokenPayload);

  // const tokenExpiration = Date.now() + 15 * 60 * 1000; // 15 mins
  // const resetPasswordLink = `${process.env.FRONT_URL}/user/resetpassword/${token}`;

  // user.resetPasswordToken = token;
  // user.resetPasswordTokenExpires = tokenExpiration;

  const verificationCode = crypto.randomInt(1000, 10000);

  user.verificationCode = verificationCode;

  user.verificationCodeExpires = Date.now() + 10 * 60 * 1000;

  await user.save();
  // send mail
  await forgotPasswordMail({
    email: user.email,
    name: user.name,
    verificationCode,
  });
  return response200(res, msg.resetPassword, []);
});

// reset password
const resetPassword = catchAsyncError(async (req, res, next) => {
  // const { token } = req.params;
  const { email, password } = req.body;

  // let decoded;
  // try {
  //   decoded = await JWTAuth.verifyToken(token);
  // } catch (error) {
  //   return response400(res, msg.invalidPasswordToken);
  // }

  const user = await userServices.findUser({ email: email });
  if (!user) return response400(res, msg.userDetailsNotFound);

  const hashedPassword = await hashPassword(password);

  await userServices.updateUser(
    { _id: user._id },
    {
      password: hashedPassword,
    }
  );
  return response200(res, msg.resetpasswordSuccess, true);
});

module.exports = {
  login,
  forgotPassword,
  resetPassword,
  signUp,
  verifyEmail,
  verifyCode,
  signUpWithGoogle,
};
