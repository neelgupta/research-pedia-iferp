import Breadcrumb from "@/components/layouts/Breadcrumb";
import React, { useEffect, useState } from "react";
import "./HeaderFooterCode.scss";
import { Button } from "@/components";
import TextArea from "@/components/inputs/TextArea";
import { Formik } from "formik";
import * as Yup from "yup"; // Import Yup
import { useDispatch } from "react-redux";
import {
  handleAddOrUpdateHeaderFooter,
  handleGetHeaderFooter,
} from "@/store/adminSlice/headerFooter";

const HeaderFooterCode = () => {
  const dispatch = useDispatch();
  const [isHfCode, setIsHfCode] = useState({});
  const initialValues = {
    headerCode: "",
    footerCode: "",
  };

  const [loading, setloading] = useState(false);

  const validationSchema = Yup.object({
    headerCode: Yup.string()
      .required("Header code is required")
      .matches(/<\/?[a-z][\s\S]*>/i, "Invalid HTML or JavaScript snippet"),
    footerCode: Yup.string()
      .required("Footer code is required")
      .matches(/<\/?[a-z][\s\S]*>/i, "Invalid HTML or JavaScript snippet"),
  });
  const fetchHeaderFooter = async () => {
    const result = await dispatch(handleGetHeaderFooter());
    if (result.status === 200) {
      setIsHfCode(result.data.response);
    }
  };

  const handleSubmit = async (values) => {
    console.log(values, "VALS");
    setloading(true);
    const result = await dispatch(handleAddOrUpdateHeaderFooter(values));
    if (result.status === 200) {
      fetchHeaderFooter();
      setloading(false);
    }
    setloading(false);
  };

  useEffect(() => {
    fetchHeaderFooter();
  }, []);

  return (
    <div id="headerfootercode-container">
      <div>
        <div className="mb-14">
          <Breadcrumb
            list={[{ title: "Site Settings" }, { title: "Category & Topics" }]}
            className="text-16-400"
            isGreen
          />
        </div>
        <Formik
          enableReinitialize
          initialValues={ isHfCode || initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {(props) => {
            const { values, handleChange, handleSubmit, errors, touched } =
              props;
            {
              console.log(values, "values");
            }
            return (
              <form onSubmit={handleSubmit}>
                <div className="categorytopics-title">
                  <h1>Header/Footer Code</h1>
                </div>
                <div className="add-rearches">
                  <div className="rearch-form border">
                    <div className="rearch-title">
                      <h1>Place HTML/JavaScript Snippet</h1>
                    </div>
                    <div className="text-add">
                      <h1>Header Code</h1>
                      <TextArea
                        name="headerCode"
                        id="headerCode"
                        onChange={handleChange}
                        value={values.headerCode}
                        error={touched.headerCode && errors.headerCode}
                        className="me-26 ms-26"
                        rows={12}
                      />
                    </div>
                    <div className="text-add mt-28">
                      <h1>Footer Code</h1>
                      <TextArea
                        name="footerCode"
                        onChange={handleChange}
                        value={values.footerCode}
                        error={touched.footerCode && errors.footerCode}
                        id="footerCode"
                        className="me-26 ms-26"
                        rows={12}
                      />
                    </div>
                    <div className="save-button d-flex justify-content-end align-items-end">
                      <Button
                        onClick={handleSubmit}
                        btnText="Save"
                        className="BWP"
                        loading={loading}
                        disabled={loading}
                      />
                    </div>
                  </div>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default HeaderFooterCode;
