import React, { useState } from "react";
import { Dropdown, Modal, Button, TextInput } from "@/components";
import { Formik } from "formik";
import TextInputwithDropdown from "@/components/inputs/TextInputwithDropdown/TextInputwithDropdown";
import { dialCode } from "@/utils/constants";
import * as Yup from "yup"; // Import Yup for validation
import { useDispatch } from "react-redux";
import { handleUpdateGoogleProfile } from "@/store/userSlice/authSlice";
import { storeLocalStorageData } from "@/utils/helpers";

const RoleSelectionModal = ({
  isOpen,
  onClose,
  onSelectRole,
  userData,
  onProfileModalHide,
}) => {
  const [Signloading, setlodding] = useState(false);
  const [phonedropdown, setphonedropdown] = useState("+91");
  const [namedropdown, setnamedropdown] = useState("Dr.");

  if (!isOpen) return null;

  const initialValues = {
    role: "",
    phoneNumber: "",
    namePrefix: "",
    name: "",
  };

  const dispatch = useDispatch();

  console.log(userData, "userData");

  const validationSchema = Yup.object({
    role: Yup.string().required("Please select a membership type"),

    phoneNumber: Yup.string()
      .matches(/^\d+$/, "Phone number should be in numbers only")
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number can't be more than 15 digits")
      .required("Phone number is required"),
  });

  const handleSubmit = async (values) => {
    const payload = {
      ...values,
      id: userData.id,
      name: userData.name,
      email: userData.email,
      namePrefix: namedropdown,
      countryCode: phonedropdown,
    };

    const result = await dispatch(handleUpdateGoogleProfile(payload));

    if (result.status === 200) {
      onProfileModalHide();
      storeLocalStorageData({
        ...result?.data.response,
        token: result.data.response.token,
      });
    }
  };

  return (
    <Modal size="xl" isClose={false} isCloseOutside>
      <div className="modal-container">
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(props) => {
            const {
              values,
              handleChange,
              handleSubmit,
              errors,
              touched,
              isSubmitting,
              setFieldValue,
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
                {/* Membership Type Dropdown */}
                <div className="">
                  <Dropdown
                    id="role"
                    label="Join As"
                    placeholder="Select"
                    name="role"
                    value={values.role}
                    onChange={(e) => setFieldValue("role", e.target.value)}
                    onlyone
                    options={[
                      {
                        id: "professional",
                        label: (
                          <div>
                            <p className="text-14-400 color-3333">
                              Professional Member
                            </p>
                            <span className="text-12-400 color-6B74">
                              Academicians, Researchers, Corporate Individuals
                            </span>
                          </div>
                        ),
                      },
                      {
                        id: "student",
                        label: (
                          <div>
                            <p className="text-14-400 color-3333">
                              Student Member
                            </p>
                            <span className="text-12-400 color-6B74">
                              UG, PG Students
                            </span>
                          </div>
                        ),
                      },
                      {
                        id: "institutional",
                        label: (
                          <div>
                            <p className="text-14-400 color-3333">
                              Institutional Member
                            </p>
                            <span className="text-12-400 color-6B74">
                              Universities / Colleges / Institutions
                            </span>
                          </div>
                        ),
                      },
                    ]}
                    error={touched.role && errors.role}
                    labelClass="pb-9"
                  />
                </div>

                {/* Name Field with Dropdown */}
                <div className="mt-16">
                  <TextInputwithDropdown
                    isname
                    id="name"
                    name="name"
                    label="Name"
                    labelClass="pb-8"
                    value={userData.name}
                    disabled="true"
                    onChange={(e) => setFieldValue("name", e.target.value)}
                    placeholder="Enter name"
                    dropdownOptions={[
                      { value: "Dr.", label: "Dr." },
                      { value: "Prof.", label: "Prof." },
                      { value: "Mr.", label: "Mr." },
                      { value: "Mrs.", label: "Mrs." },
                      { value: "Ms.", label: "Ms." },
                    ]}
                    onDropdownChange={(selected) => setnamedropdown(selected)}
                    error={touched.name && errors.name}
                  />
                </div>

                {/* Email Field */}
                <div className="mt-16">
                  <TextInput
                    id="email"
                    name="email"
                    label="Email"
                    labelClass="pb-10"
                    value={userData.email}
                    onChange={handleChange}
                    error={touched.email && errors.email}
                    placeholder="Email"
                    type="email"
                    disabled="true"
                  />
                </div>

                {/* Phone Number Field with Dropdown */}
                <div className="mt-16">
                  <TextInputwithDropdown
                    isphone
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    labelClass="pb-8"
                    value={values.phoneNumber}
                    onChange={(e) =>
                      setFieldValue("phoneNumber", e.target.value)
                    }
                    placeholder="Enter phone number"
                    dropdownOptions={dialCode.map((item) => ({
                      value: item.dial_code,
                      label: `${item.dial_code}`,
                    }))}
                    onDropdownChange={(selected) => setphonedropdown(selected)}
                    error={touched.phoneNumber && errors.phoneNumber}
                    type="text"
                    maxLength={15}
                  />
                </div>

                <div className="login-btn mt-20">
                  <Button
                    btnText="Submit"
                    className="h-45 br-12 text-18-500"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    loading={Signloading}
                  />
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </Modal>
  );
};

export default RoleSelectionModal;
