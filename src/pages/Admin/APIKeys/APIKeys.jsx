import React, { useState } from "react";
import "./APIKeys.scss";
import Breadcrumb from "@/components/layouts/Breadcrumb";
import * as Yup from "yup";
import { Formik } from "formik";
import { Button, Dropdown, TextInput } from "@/components";
import Table from "@/components/layouts/Table";
import { icons } from "@/utils/constants";
import DaterangePicker from "@/components/inputs/DaterangePicker";
const APIKeys = () => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [allKeyList, setAllKeyList] = useState({
    total: 0,
    offset: 0,
    limit: 10,
    search: "",
    sortKeyOrder: 1,
    sortKey: "",
    data: [
      {
        amount: "$100",
        from: "12/02/2023",
        to: "12/02/2023",
        aiCredits: "18000",
        apiCalls: "100,000",
        tokenUsage: "10,000,000",
      },
      {
        amount: "$100",
        from: "12/02/2023",
        to: "12/02/2023",
        aiCredits: "18000",
        apiCalls: "100,000",
        tokenUsage: "10,000,000",
      },
      {
        amount: "$100",
        from: "12/02/2023",
        to: "12/02/2023",
        aiCredits: "18000",
        apiCalls: "100,000",
        tokenUsage: "10,000,000",
      },
      {
        amount: "$100",
        from: "12/02/2023",
        to: "12/02/2023",
        aiCredits: "18000",
        apiCalls: "100,000",
        tokenUsage: "10,000,000",
      },
      {
        amount: "$100",
        from: "12/02/2023",
        to: "12/02/2023",
        aiCredits: "18000",
        apiCalls: "100,000",
        tokenUsage: "10,000,000",
      },
      {
        amount: "$100",
        from: "12/02/2023",
        to: "12/02/2023",
        aiCredits: "18000",
        apiCalls: "100,000",
        tokenUsage: "10,000,000",
      },
      {
        amount: "$100",
        from: "12/02/2023",
        to: "12/02/2023",
        aiCredits: "18000",
        apiCalls: "100,000",
        tokenUsage: "10,000,000",
      },
    ],
  });
  const header = [
    {
      title: "Amount",
      className: "wp-20 justify-content-between",
      isSort: false,
    },
    {
      title: "From",
      className: "wp-20 justify-content-between",
      isSort: false,
    },
    {
      title: "To",
      className: "wp-20 justify-content-between",
      isSort: false,
    },
    {
      title: "AI Credits",
      className: "wp-20 justify-content-between",
      isSort: false,
    },
    {
      title: "API Calls",
      className: "wp-20 justify-content-between",
      isSort: false,
    },
    {
      title: "Token Usage",
      className: "wp-20 justify-content-between",
      isSort: false,
    },
  ];

  const rowData = [];
  allKeyList?.data?.forEach((elem, index) => {
    const { amount, from, to, aiCredits, apiCalls, tokenUsage } = elem;
    let obj = [
      {
        value: <h6 className="mb-2 text-14-600">{amount}</h6>,
        className: "h-64 wp-20 justify-content-start pointer",
      },
      {
        value: <p>{from}</p>,
        className: "wp-20 justify-content-start flex-wrap pointer",
      },
      {
        value: <p className="mb-0">{to}</p>,
        className: "wp-20 justify-content-start flex-wrap pointer",
      },
      {
        value: <p className="mb-0">{aiCredits}</p>,
        className: "wp-20 justify-content-start flex-wrap pointer",
      },
      {
        value: <p className="mb-0">{apiCalls}</p>,
        className: "wp-20 justify-content-start flex-wrap pointer",
      },
      {
        value: <p className="mb-0">{tokenUsage}</p>,
        className: "wp-20 justify-content-start flex-wrap pointer",
      },
    ];
    rowData.push({ data: obj });
  });

  const initialValues = {
    gptModel: "",
    Chatgaptapikey: "",
    semanticscholarkeyapi: "",
    googletranslationkeyapi: "",
    textTospeechapikey: "",
  };

  const validationSchema = Yup.object({
    gptModel: Yup.string().required("Please select an ad type"),
    Chatgaptapikey: Yup.string().required("Api Key is required"),
    semanticscholarkeyapi: Yup.string().required("Api Key is required"),
    googletranslationkeyapi: Yup.string().required("Api Key is required"),
    textTospeechapikey: Yup.string().required("Api Key is required"),
  });

  const handleDateSelect = (range) => {
    console.log("Selected Range:", range);
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log("Submitted Values:", values);
    setSubmitting(false);
  };

  return (
    <div id="apikey-conatiner">
      <div>
        <div className="mb-14">
          <Breadcrumb
            list={[{ title: "API Keys" }]}
            className="text-16-400"
            isGreen
          />
        </div>
        <div className="categorytopics-title">
          <h1>API Keys</h1>
        </div>

        <div className="maintable-container">
          <div className="table-header d-flex flex-wrap justify-content-between align-items-center">
            <div>
              <h1 className="text-16-600 color-1D26">Chat GPT</h1>
            </div>
            <div className="d-flex flex-wrap gap-2 mt-5">
              <div>
                <DaterangePicker onDateSelect={handleDateSelect} />
              </div>

              <Button
                btnText="Export"
                className="w-100 h-45 br-12 text-18-500"
              />
            </div>
          </div>
          <Table
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            header={header}
            row={rowData}
            totalRows={allKeyList?.data?.length}
            min="1000px"
          />
        </div>

        <div className="add-rearches">
          <div className="rearch-form ">
            <div className="rmtpreplay-form">
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
                      <div className="chatgpt-form">
                        <div className="rearch-title">
                          <h1>Chat GPT</h1>
                        </div>
                        <div className="row ps-26 pe-26">
                          <div className="col-lg-6 col-12">
                            <div className="mb-24 mt-16">
                              <Dropdown
                                id="gptModel"
                                label="Chat GPT Model"
                                placeholder="Select chat gpt model"
                                name="gptModel"
                                value={values.gptModel}
                                onChange={(e) =>
                                  setFieldValue("gptModel", e.target.value)
                                }
                                options={[
                                  { id: "intermediate", label: "Intermediate" },
                                  { id: "beginner", label: "Beginner" },
                                  { id: "advanced", label: "Advanced" },
                                ]}
                                error={touched.gptModel && errors.gptModel}
                                labelClass="pb-9"
                              />
                            </div>
                          </div>

                          <div className="col-lg-6 col-12">
                            <div className="mb-24 mt-16">
                              <TextInput
                                id="Chatgaptapikey"
                                name="Chatgaptapikey"
                                labelClass="pb-9"
                                value={values.Chatgaptapikey}
                                onChange={handleChange}
                                error={
                                  touched.Chatgaptapikey &&
                                  errors.Chatgaptapikey
                                }
                                placeholder="Enter chat gpt api key"
                                label="Chat GPT API Key"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="chatgpt-form mt-24 ">
                        <div className="rearch-title">
                          <h1>Semantic Scholar</h1>
                        </div>
                        <div className="row ps-26 pe-26">
                          <div className="col-12">
                            <div className="mb-24 mt-16">
                              <TextInput
                                id="semanticscholarkeyapi"
                                name="semanticscholarkeyapi"
                                labelClass="pb-9"
                                value={values.semanticscholarkeyapi}
                                onChange={handleChange}
                                error={
                                  touched.semanticscholarkeyapi &&
                                  errors.semanticscholarkeyapi
                                }
                                placeholder="Enter semantic scholar api key"
                                label="Semantic Scholar API Key"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="chatgpt-form mt-24">
                        <div className="rearch-title">
                          <h1>Google Translation </h1>
                        </div>
                        <div className="row ps-26 pe-26">
                          <div className="col-12">
                            <div className="mb-24 mt-16">
                              <TextInput
                                id="googletranslationkeyapi"
                                name="googletranslationkeyapi"
                                labelClass="pb-9"
                                value={values.googletranslationkeyapi}
                                onChange={handleChange}
                                error={
                                  touched.googletranslationkeyapi &&
                                  errors.googletranslationkeyapi
                                }
                                placeholder="Enter google translation api key"
                                label="Google Translation API Key"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="chatgpt-form mt-24">
                        <div className="rearch-title">
                          <h1>Google Text to Speech</h1>
                        </div>
                        <div className="row ps-26 pe-26">
                          <div className="col-12">
                            <div className="mb-24 mt-16">
                              <TextInput
                                id="textTospeechapikey"
                                name="textTospeechapikey"
                                labelClass="pb-9"
                                value={values.textTospeechapikey}
                                onChange={handleChange}
                                error={
                                  touched.textTospeechapikey &&
                                  errors.textTospeechapikey
                                }
                                placeholder="Enter google text to speech api key"
                                label="Google Text to Speech API Key"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-16 mb-26 d-flex justify-content-end pe-26">
                        <Button
                          btnText="Save"
                          className="w-100 h-45 br-12 text-18-500"
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
        </div>
      </div>
    </div>
  );
};

export default APIKeys;
