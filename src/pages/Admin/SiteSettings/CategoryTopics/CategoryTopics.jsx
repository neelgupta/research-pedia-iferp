import React, { useCallback, useEffect, useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./CategoryTopics.scss";
import DropdownWithTags from "@/components/inputs/DropdownWithTags/DropdownWithTags";
import { Button, Dropdown } from "@/components";
import Breadcrumb from "@/components/layouts/Breadcrumb";
import { icons } from "@/utils/constants/icon";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { Row, Col } from "react-bootstrap"; // Import Row and Col from react-bootstrap
import Table from "@/components/layouts/Table";
// import { useDispatch } from "react-redux";
import {
  handleGetTopics,
  updateTopicsPriority,
} from "@/store/adminSlice/categoryAndTopics";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";

const CategoryTopics = () => {
  // const [editMode, setEditMode] = useState(null);
  // const [openDropdowns, setOpenDropdowns] = useState({}); // Object to track open state per tag
  // const [savedValues, setSavedValues] = useState([
  //   {
  //     categoryTitle: "Engineering",
  //     categoryTag: [
  //       "Science & Technology",
  //       "Education & Management",
  //       "Arts & Science",
  //     ],
  //   },
  //   {
  //     categoryTitle: "Engineering",
  //     categoryTag: [
  //       "Science & Technology",
  //       "Education & Management",
  //       "Arts & Science",
  //       "Science & Technology",
  //       "Education & Management",
  //       "Arts & Science",
  //       "Science & Technology",
  //       "Education & Management",
  //       "Arts & Science",
  //     ],
  //   },
  //   {
  //     categoryTitle: "Engineering",
  //     categoryTag: [
  //       "Science & Technology",
  //       "Education & Management",
  //       "Arts & Science",
  //     ],
  //   },
  // ]);

  // const [selectedDropdownValues, setSelectedDropdownValues] = useState({});

  // const options = [
  //   { value: "Engineering", label: "Engineering" },
  //   { value: "Science & Technology", label: "Science & Technology" },
  //   { value: "Economics", label: "Economics" },
  // ];

  // const handleEditClick = (index) => {
  //   setEditMode(editMode === index ? null : index);
  // };

  // const handleRemoveTag = (categoryIndex, tagIndex) => {
  //   const updatedCategories = [...savedValues];
  //   updatedCategories[categoryIndex].categoryTag.splice(tagIndex, 1);
  //   setSavedValues(updatedCategories);
  // };

  // Handle selection change for each tag
  // const handleSelectChange = (categoryIndex, tagIndex, value) => {
  //   setSelectedDropdownValues((prevState) => ({
  //     ...prevState,
  //     [`${categoryIndex}-${tagIndex}`]: value,
  //   }));
  // };

  // const handleSubmit = (values) => {};

  // const textColorMapping = {
  //   high: "red",
  //   mediam: "orange",
  //   low: "green",
  // };

  const dispatch = useDispatch();
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [isTopicList, setIsTopicList] = useState([]);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
const [loadding , setloadding] = useState(false)
  const priorityOption = [
    { value: "high", label: "High" },
    { value: "medium", label: "Medium" },
    { value: "low", label: "Low" },
  ];

  const fetchTopics = async (debouncedSearchTerm = "") => {
    setloadding(true)
    const result = await dispatch(
      handleGetTopics(currentPage, rowsPerPage, debouncedSearchTerm)
    );
    if (result?.status === 200) {
      const data = result?.data?.response?.topics;
      setIsTopicList(data);
      setTotalCount(result?.data?.response?.pagination?.totalCount);
      setloadding(false)
    }
    setloadding(false)
  };

  const handlePriorityChange = async (selectedOption, id) => {
    const updateData = {
      priority: selectedOption,
    };
    const result = await dispatch(updateTopicsPriority(id, updateData));

    if (result.status === 200) {
      fetchTopics();
    }
  };

  const debouncedApiCall = useCallback(
    debounce((query) => {
      setDebouncedSearchTerm(query);
    }, 800),
    []
  );

  const handleSearch = (e) => {
    // setSearchQuery(e.target.value);
    debouncedApiCall(e.target.value);
  };

  useEffect(() => {
    fetchTopics(debouncedSearchTerm);
  }, [currentPage, rowsPerPage,debouncedSearchTerm]);

  const header = [
    {
      title: "Sr. No",
      className: "wp-10 justify-content-between",
    },
    {
      title: "Topics",
      className: "wp-40 justify-content-between",
    },
    {
      title: "Category",
      className: "wp-40 justify-content-between",
    },
    {
      title: "Priority",
      className: "wp-20 justify-content-between",
    },
  ];

  const rowData = [];
  isTopicList?.forEach((elem, index) => {
    const { topics, priority, category, _id } = elem;

    let obj = [
      {
        value: currentPage * rowsPerPage + index + 1 - rowsPerPage,
        className: "wp-10 justify-content-start pointer",
      },
      {
        value: (
          <p
            className="mb-0"
            onClick={() =>
              navigate("/admin/manage-users/list-user/user-details")
            }
          >
            {topics}
          </p>
        ),
        className: "wp-40 justify-content-start flex-wrap pointer",
      },
      {
        value: (
          <p
            className="mb-0"
            onClick={() =>
              navigate("/admin/manage-users/list-user/user-details")
            }
          >
            {category !== null && category !== undefined ? category : "Null"}
          </p>
        ),
        className: "wp-40 justify-content-start flex-wrap pointer",
      },
      {
        value: (
          <div className="wp-100 pe-10 pe-50">
            <Dropdown
              id="priority"
              optionLabel="label"
              optionKey="value"
              value={priority}
              options={priorityOption}
              onChange={(e) => handlePriorityChange(e.target.data.value, _id)}
            />
          </div>
        ),
        className: "wp-20 justify-content-start flex-wrap pointer",
      },
    ];
    rowData.push({ data: obj });
  });

  return (
    <div id="categorytopics-container">
      <div>
        <div className="mb-14">
          <Breadcrumb
            list={[{ title: "Site Settings" }, { title: "Category & Topics" }]}
            className="text-16-400"
            isGreen
          />
        </div>

        <div className="categorytopics-title">
          <h1>Category & Topics</h1>
        </div>

        <div className="maintable-container my-20">
          <Table
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            header={header}
            row={rowData}
            totalRows={totalCount}
            min="1000px"
            handleSearch={handleSearch}
            // searchVal={searchVal}
            isSearch
            ispaginationcontrols
            ispagination
            istableaction
            loading={loadding}
          />
        </div>

        {/* <div className="add-rearches">
          <div className="rearch-form border">
            <div className="rearch-title">
              <h1>Add Research Category & Topics</h1>
            </div>
            <Formik
              initialValues={{
                categoryTopics: { category: "", topics: [] },
              }}
              validationSchema={Yup.object({
                categoryTopics: Yup.object({
                  category: Yup.string().required("Category is required"),
                  topics: Yup.array()
                    .of(Yup.string())
                    .min(1, "At least one topic is required")
                    .required("Topics are required"),
                }).required("Please provide category and topics"),
              })}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue, values, errors, touched }) => (
                <Form>
                  <div className="dropdown-container">
                    <DropdownWithTags
                      name="categoryTopics" // Pass the Formik field name
                      value={values.categoryTopics} // Ensure Formik values are bound
                      options={options}
                      onSelectionChange={(selectedValues) => {
                        setFieldValue("categoryTopics", {
                          category: selectedValues.category || "",
                          topics: selectedValues.topics || [],
                        });
                      }}
                    />
                  </div>
                  <div className="save-button d-flex justify-content-end align-items-end">
                    <Button btnText="Save" />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div> */}

        {/* <div className="category-table">
          <Row>
            {" "}
            {savedValues.map((category, categoryIndex) => (
              <Col key={categoryIndex} xl={4} md={6} sm={12} className="p-0">
                <div className="border cetegory-card overflow-auto rearchPedia-scroll p-0 me-8 mt-8">
                  <div className="cate-title d-flex align-items-center">
                    <div
                      className="d-flex justify-content-between"
                      style={{ width: "100%" }}
                    >
                      <div>
                        <h1 className="mb-0">{category.categoryTitle}</h1>
                      </div>
                      <div>
                        <span
                          onClick={() => handleEditClick(categoryIndex)}
                          style={{ cursor: "pointer" }}
                        >
                          {editMode === categoryIndex ? "Done" : "Edit"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="category-tag">
                    {category.categoryTag.map((item, tagIndex) => (
                      <div
                        key={tagIndex}
                        className="teg-child d-flex justify-content-between align-items-center position-relative"
                      >
                        <div className="tag-text">
                          <p className="mb-0">{item}</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <Dropdown
                            onSelect={(value) =>
                              handleSelectChange(categoryIndex, tagIndex, value)
                            }
                          >
                            <Dropdown.Toggle
                              variant="light"
                              id="dropdown-basic"
                              style={{
                                color:
                                  textColorMapping[
                                    selectedDropdownValues[
                                      `${categoryIndex}-${tagIndex}`
                                    ]
                                  ] || "black",
                                border: "1px solid #ccc",
                                width: "150px",
                              }}
                            >
                              {selectedDropdownValues[
                                `${categoryIndex}-${tagIndex}`
                              ] || "Select"}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item eventKey="high">
                                High
                              </Dropdown.Item>
                              <Dropdown.Item eventKey="mediam">
                                Mediam
                              </Dropdown.Item>
                              <Dropdown.Item eventKey="low">Low</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>

                          {editMode === categoryIndex && (
                            <IoMdRemoveCircleOutline
                              style={{ cursor: "pointer", color: "red" }}
                              onClick={() =>
                                handleRemoveTag(categoryIndex, tagIndex)
                              }
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div> */}
      </div>
    </div>
  );
};

export default CategoryTopics;
