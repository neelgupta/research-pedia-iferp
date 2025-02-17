import React, { useCallback, useEffect, useState } from "react";
import "./CategoryTopics.scss";
import { Dropdown } from "@/components";
import Breadcrumb from "@/components/layouts/Breadcrumb";
import Table from "@/components/layouts/Table";
import {
  handleGetTopics,
  updateTopicsPriority,
} from "@/store/adminSlice/categoryAndTopics";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";

const CategoryTopics = () => {
  const dispatch = useDispatch();
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [isTopicList, setIsTopicList] = useState([]);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [loadding, setloadding] = useState(false);

  const priorityOption = [
    { value: "high", label: "High" },
    { value: "medium", label: "Medium" },
    { value: "low", label: "Low" },
  ];

  const [selectedPriority, setSelectedPriority] = useState("");
  const fetchTopics = async (debouncedSearchTerm = "") => {
    setloadding(true);
    const result = await dispatch(
      handleGetTopics(currentPage, rowsPerPage, debouncedSearchTerm)
    );
    if (result?.status === 200) {
      const data = result?.data?.response?.topics;
      setIsTopicList(data);
      setTotalCount(result?.data?.response?.pagination?.totalCount);
      setloadding(false);
    }
    setloadding(false);
  };

  const handlePriorityChange = async (selectedOption, id) => {
    setSelectedPriority(selectedOption);
    const updateData = {
      priority: selectedOption,
    };
    const result = await dispatch(updateTopicsPriority(id, updateData));

    if (result.status === 200) {
      fetchTopics(debouncedSearchTerm);
    }
  };

  const debouncedApiCall = useCallback(
    debounce((query) => {
      setDebouncedSearchTerm(query);
    }, 800),
    []
  );

  const handleSearch = (e) => {
    debouncedApiCall(e.target.value);
  };

  useEffect(() => {
    fetchTopics(debouncedSearchTerm);
  }, [currentPage, rowsPerPage, debouncedSearchTerm]);
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

  const getPriorityStyle = (selectedPriority) => {
    switch (selectedPriority) {
      case "high":
        return "#FA4520";
      case "medium":
        return "#B89137";
      case "low":
        return "#178368";
      default:
        return {};
    }
  };
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
              // className={`color-${getPriorityStyle(priority)}`}
              // style={{ color: getPriorityStyle(priority) }}
              className={getPriorityStyle(priority)}
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
            isSearch
            ispaginationcontrols
            ispagination
            istableaction
            loading={loadding}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryTopics;
