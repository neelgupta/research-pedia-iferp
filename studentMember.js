const mongoose = require("mongoose");
const { userType } = require("../utils/constant");

const personalDetailSchema = mongoose.Schema({
  city: {
    type: String,
  },
  bacheloerDegreeOrUgDetails: {
    course: {
      type: String,
    },
    department: {
      type: String,
    },
    university: {
      type: String,
    },
    institution: {
      type: String,
    },
    yearOfCompletion: {
      type: Date,
    },
  },
  currentProffessionDetails: {
    insOrOrganizationName: {
      type: String,
    },
    department: {
      type: String,
    },
  },
});

const educationSchema = mongoose.Schema({
  masterDegreeOrPgDetails: {
    course: {
      type: String,
    },
    department: {
      type: String,
    },
    university: {
      type: String,
    },
    institution: {
      type: String,
    },
    yearOfCompletion: {
      type: Date,
    },
  },
  doctorateOrPhdDetails: {
    course: {
      type: String,
    },
    department: {
      type: String,
    },
    university: {
      type: String,
    },
    institution: {
      type: String,
    },
    yearOfCompletion: {
      type: Date,
    },
  },
});

const researchSchema = mongoose.Schema({
  researchIntrest: {
    areaOfIntrest: {
      type: String,
    },
    comments: {
      type: String,
    },
  },
});

const studentMemberSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },

    role: {
      type: String,
      enum: ["student"],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    countryCode: {
      type: String,
      required: true,
    },
    namePrefix: {
      type: String,
      enum: ["Mr.", "Mrs.", "Ms.", "Dr.", "Prof."],
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    dateOfbirth: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: false,
    },
    country: {
      id: {
        type: String,
      },
      countryName: {
        type: String,
      },
    },
    state: {
      id: {
        type: String,
      },
      stateName: {
        type: String,
      },
    },
    profilePicture: {
      type: String,
    },
    verificationCode: { type: Number },
    verificationCodeExpires: { type: Date },

    isActive: {
      type: Boolean,
      default: true,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
    isVerified: {
      type: Boolean,
      default: true,
    },
    googleId: {
      type: String,
    },
    isPersonalDetailsCompleted: { type: Boolean, default: true },
    personalDetails: personalDetailSchema,
    educationDetails: educationSchema,
    researchDetails: researchSchema,
    memberShipid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Plan",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("StudentMember", studentMemberSchema);
