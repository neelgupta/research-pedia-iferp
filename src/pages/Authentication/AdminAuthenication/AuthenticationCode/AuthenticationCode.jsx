import { Button, TextInput } from "@/components";
import { icons } from "@/utils/constants";
import { Formik } from "formik";
import "./AuthenticationCode.scss"
import * as Yup from "yup";
const AuthenticationCode =() =>{

  const initialValues = {
    Code : ""
  };

  const validationSchema = Yup.object({
    Code: Yup.string().required("Code is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
      console.log("values" , values)
  };
    return(
        <>
                <div id="authenticationCode-container">
    <div className="checkmail-card">
    <div class="login-logo d-flex justify-content-start align-items-center">
  <div class="img-tag me-3">
    <img src={icons.loginicon} alt="login-img" className="img-fluid"/>
  </div>

</div>

<div className="login-text d-flex justify-content-start align-items-center">
  <h1>Authentication Code</h1>
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
            
            <div className="mb-24">
                <TextInput
                  id="Code"
                  name="Code"
                
                  value={values.Code}
                  onChange={handleChange}
                  error={touched.Code && errors.Code}
                  placeholder="Enter code"
                  type="text"
                />
              </div>
              <div className="login-btn">
                <Button
                  btnText="Verify"
                  className="wp-100 h-45  br-12 text-18-500"
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

export default AuthenticationCode;