
import FileUpload from "@/components/inputs/FileUpload";
import "./ScrollDisplay.scss"
import { Button, Dropdown, PasswordInput, TextInput } from "@/components";
import Breadcrumb from "@/components/layouts/Breadcrumb";
import { Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import ImageUpload from "@/components/inputs/ImageUpload";
import { icons } from "@/utils/constants";
import Table from "@/components/layouts/Table";
const ScrollDisplay =() =>{
  const [rowsPerPage, setRowsPerPage] = useState(5);
      const [currentPage, setCurrentPage] = useState(1);
        const [allStudentList, setAllStudentList] = useState({
            total: 0,
            offset: 0,
            limit: 10,
            search: "",
            sortKeyOrder: 1,
            sortKey: "",
            data: [
              {
              
                name: "Header Banner",
                showAds: "All Users",
                redirectLink: "https://www.researchpedia",
                bannerImage : "header-banner.png",
              },
              {
              
                name: "Header Banner",
                showAds: "All Users",
                redirectLink: "https://www.researchpedia",
                bannerImage : "header-banner.png",
              },
              {
              
                name: "Header Banner",
                showAds: "All Users",
                redirectLink: "https://www.researchpedia",
                bannerImage : "header-banner.png",
              },
              {
              
                name: "Header Banner",
                showAds: "All Users",
                redirectLink: "https://www.researchpedia",
                bannerImage : "header-banner.png",
              },
              {
              
                name: "Header Banner",
                showAds: "All Users",
                redirectLink: "https://www.researchpedia",
                bannerImage : "header-banner.png",
              },
            ],
          });
          const header = [
            {
              title: "Banner Name",
              className: "wp-30 justify-content-between",
              isSort: true,
            },
            {
              title: "Show Ads",
              className: "wp-30 justify-content-between",
              isSort: true,
            },
            {
              title: "Redirect Link",
              className: "wp-50 justify-content-between",
              isSort: true,
            },
            {
              title: "Banner Image",
              className: "wp-30 justify-content-between",
              isSort: true,
            },
            {
              title: "Action",
              className: "wp-20 justify-content-center",
              isSort: false,
            },
          ];
        
          const rowData = [];
          allStudentList?.data?.forEach((elem, index) => {
            const { name, showAds, redirectLink, bannerImage} =
              elem;
            let obj = [
              {
                value: (
                 
                   
                      <h6 className="mb-2 text-14-600">{name}</h6>
    
                  
             
                ),
                className: "wp-30 justify-content-start pointer",
              },
              {
                value: (
                 
                     <p>{showAds}</p>
                     
                   
                ),
                className: "wp-30 justify-content-start flex-wrap pointer",
              },
              {
                value: (
                  <p
                    className="mb-0"
                   
                  >
                    {redirectLink}
                  </p>
                ),
                className: "wp-50 justify-content-start flex-wrap pointer",
              },
              {
                value: (
                  <p
                    className="mb-0"
                  
                  >
                    {bannerImage}
                  </p>
                ),
                className: "wp-30 justify-content-start flex-wrap pointer",
              },
            
              {
                value: (
                  <div className="d-flex gap-2 align-items-center justify-content-center">
                   <img
              src={icons?.viewIcons}
              alt="view-icons"
              loading="lazy"
              className="pointer"
            />
            <img
              src={icons?.editIcons}
              alt="edit-icons"
              loading="lazy"
              className="pointer"
            />
            <img
              src={icons?.deleteIcons}
              alt="delete-icons"
              loading="lazy"
              className="pointer"
            />
                  </div>
                ),
                className: "wp-20 justify-content-center flex-wrap",
              },
            ];
            rowData.push({ data: obj });
          });

    const initialValues = {
        ads: "",
        link: "",
        bannerImage: null,
      };
    


      const validationSchema = Yup.object({
        ads: Yup.string().required("Please select an ad type"),
        link: Yup.string("Enter a valid URL")
          .required("Redirect Link is required"),
        bannerImage: Yup.mixed().required("Banner image is required"),
      });
    
      const handleSubmit = async (values, { setSubmitting }) => {
        console.log("Submitted Values:", values);
        setSubmitting(false);
      };

    return(
        <div id="scrolldisplay-conatiner">
      <div>
        <div className="mb-14">
          <Breadcrumb
            list={[{ title: "Banner Ads" }, { title: "On Scroll Display" }]}
            className="text-16-400"
            isGreen
          />
        </div>
        <div className="categorytopics-title">
          <h1>On Scroll Display</h1>
        </div>
        <div className="add-rearches">
          <div className="rearch-form border">
            <div className="rearch-title">
              <h1>On Scroll Display</h1>
            </div>

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
                      <div className="row">
                     
                        <div className="col-lg-6 col-12">
                          <div className="mb-24 mt-16">
                            <Dropdown
                              id="ads"
                              label="Show Ads"
                              placeholder="Select option"
                              name="ads"
                              value={values.ads}
                              onChange={(e) =>
                                setFieldValue("ads", e.target.value)
                              }
                              options={[
                                { id: "intermediate", label: "Intermediate" },
                                { id: "beginner", label: "Beginner" },
                                { id: "advanced", label: "Advanced" },
                              ]}
                              error={
                                touched.ads && errors.ads
                              }
                              labelClass="pb-9"
                            />
                          </div>
                        </div>
                      
                        <div className="col-lg-6 col-12">
                          <div className="mb-24 mt-16">
                            <TextInput
                              id="link"
                              name="link"
                              labelClass="pb-9"
                              value={values.link}
                              onChange={handleChange}
                              error={touched.link && errors.link}
                              placeholder="Enter redirect link"
                              label="Redirect Link"
                            />
                          </div>
                        </div>

                        <div className="col-12 cmb-22">
                        <ImageUpload name="bannerImage" label="Banner Image" 
                          error={touched.bannerImage && errors.bannerImage}/>
              </div>

                      </div>

                      <div className="mt-16 mb-26 d-flex justify-content-end">
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

        <div className='maintable-container'>

 

<div className="table-header d-flex d-flex justify-content-between align-items-center">
       <div>
         <h1 className='text-16-600 color-1D26'>On Scroll Display</h1>
       </div>
     
   </div>
     <Table
       setCurrentPage={setCurrentPage}
       currentPage={currentPage}
       rowsPerPage={rowsPerPage}
       setRowsPerPage={setRowsPerPage}
       header={header}
       row={rowData}
       totalRows={allStudentList?.data?.length}
       min="1000px"
     
     />
     </div>
      </div>
    </div>
    )
}
export default ScrollDisplay;