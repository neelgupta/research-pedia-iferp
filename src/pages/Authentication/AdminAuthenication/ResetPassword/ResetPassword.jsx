import { icons } from "@/utils/constants/icon";
import "./ResetPassword.scss"
import { Formik } from "formik";
import { Button, PasswordInput } from "@/components";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { updateforgotpassword } from "@/store/globalSlice";
import { useDispatch } from "react-redux";
const ResetPassword =() =>{

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useParams();

    const initialValues = {
      
       password: "",
       ConfirmPassword : ""
     };
   
     const validationSchema = Yup.object({
      password: Yup.string()
        .required("Password is required"),
      
        ConfirmPassword: Yup.string()
        .required("Password confirmation is required")
        .oneOf([Yup.ref('password'), null], "Passwords must match"), 
    });
    
   
   

      const handleSubmit = async (values, { setSubmitting }) => {
        const res = await dispatch(updateforgotpassword({ ...values, token }));
     
        if (res.status === 200) {
          navigate("/admin/login")
        }
        setSubmitting(false);

      };

    return (
        <>
             <div id="resetpassword-container">
    <div className="checkmail-card">
    <div class="login-logo d-flex justify-content-start align-items-center">
  <div class="img-tag me-3">
    <img src={icons.loginicon} alt="login-img" className="img-fluid"/>
  </div>

</div>

<div className="login-text d-flex justify-content-start align-items-center">
  <h1>Reset Password</h1>
</div>
<div className="login-para">
<p className="login-p mt-9 mb-9">Please choose your new password</p>
</div>
<Formik
        enableReinitialize
        initialValues={initialValues}
         onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(props) => {
          const {
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            isSubmitting,
          } = props;

          return (
            <form
              onSubmit={handleSubmit}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit();
                }
              }}
            >
            <div>
                <PasswordInput
                  id="password"
                  name="password"
                  label ="Password"
                    labelClass = "pb-9"
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && errors.password}
                  placeholder="Password"
                />
              </div>
              <div>
                <PasswordInput
                  id="ConfirmPassword"
                  name="ConfirmPassword"
                  label = "Confirm Password"
                     labelClass = "pb-9"
                  value={values.ConfirmPassword}
                  onChange={handleChange}
                  error={touched.ConfirmPassword && errors.ConfirmPassword}
                  placeholder="Confirm Password"
                />
              </div>
  
              <div className="login-btn">
                <Button
                  btnText="Reset Password"
                  className="wp-100 h-45 br-12 text-18-500"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                
                />
              </div>
            
            </form>
          );
        }}
      </Formik>
    </div>
  </div>
 
        </>
    )
}

export default ResetPassword;