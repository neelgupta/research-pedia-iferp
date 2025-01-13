import Button from "@/components/inputs/Button";
import SearchInput from "@/components/inputs/SearchInput";
import { icons } from "@/utils/constants";
import { trimLeftSpace } from "@/utils/helpers";
import { debounce } from "lodash";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { GrNext, GrPrevious } from "react-icons/gr";
import Roundedloader from "../Roundedloader";
import "./Table.scss";

const Table = ({
  header,
  row,
  min,
  totalRows,
  rowsPerPage,
  setRowsPerPage,
  currentPage,
  setCurrentPage,
  searchPlaceholder,
  loading,
  handleSorting,
  searchVal,
  handleSearch,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const startRow = startIndex + 1;
  const endRow = Math.min(startIndex + rowsPerPage, totalRows);

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const generateRowOptions = () => {
    const options = [];
    const maxRowsPerPage = Math.min(totalRows, 100);

    for (let i = 5; i <= maxRowsPerPage; i += 5) {
      options.push(i);
    }

    return options;
  };

  const handleOptionClick = (option) => {
    handleRowsPerPageChange({ target: { value: option } });
    setIsOpen(false);
  };

  const handleNextPageR = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const rowOptions = generateRowOptions();

  return (
    <div id="table-container">
      <div className="top-title">
        <p>List Users </p>
      </div>
      <div className="table-search">
        {/* {totalPages > 1 && ( */}
        <div className="pagination-controls">
          <div className="d-flex justify-content-end gap-md-5 gap-2 flex-wrap">
            <div className="d-flex align-items-center gap-3">
              <div className="select" onClick={() => setIsOpen(!isOpen)}>
                <div className="fb-center gap-2">
                  <div className="ms-5 mt-5">{rowsPerPage}</div>
                </div>
                {isOpen && (
                  <div className="options">
                    {rowOptions.map((option) => (
                      <div
                        key={option}
                        className="option"
                        onClick={() => handleOptionClick(option)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <span className="text-14-400 color-1319">entries per page</span>
            </div>
          </div>
        </div>
        {/* )} */}
        <div>
          <SearchInput
            value={searchVal}
            className="mw-250"
            placeholder={searchPlaceholder || "Search..."}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="table-body brave-scroll">
        <div className="header-row" style={{ minWidth: min || "500px" }}>
          {header?.map((elm, index) => {
            const { title, className, isSort } = elm;
            return (
              <div
                className={`header-cell pointer ${className || ""}`}
                key={index}
              >
                <p>{title}</p>
                {isSort && (
                  <p onClick={() => handleSorting(title)}>
                    <img
                      src={icons.sortingIcons}
                      alt="sort"
                      className="fit-image h-12 w-12"
                    />
                  </p>
                )}
              </div>
            );
          })}
        </div>
        <div
          className="body-container brave-scroll"
          style={{ minWidth: row.length === 0 ? "100%" : min || "500px" }}
        >
          {loading ? (
            <div className="text-center pt-100 pb-100">
              <Roundedloader />
            </div>
          ) : (
            <>
              {row.length === 0 && (
                <div className="text-center pt-100 pb-100 text-18-500 color-a1a1">
                  No data found
                </div>
              )}
              {row.map((elm, index) => {
                if (elm.month) {
                  return (
                    <div
                      className="month-header"
                      key={index}
                      style={{
                        backgroundColor: "#D0D0D0",
                        padding: "10px 20px",
                      }}
                    >
                      {renderMonthHeader(elm.month)}
                    </div>
                  );
                }

                return (
                  <div className="body-row" key={index}>
                    {elm.data.map((cElem, cIndex) => {
                      return (
                        <div
                          className={`body-cell d-flex align-items-center ${
                            cElem.className || ""
                          }`}
                          key={cIndex}
                        >
                          {cElem.value}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>

      {/* {totalPages > 1 && ( */}
      <div className="pagination">
        <span className="d-flex align-items-center page-c  text-14-400 color-1319">
          Showing
          <span className="row-count ps-5 pe-5">
            {startRow} to {endRow}
          </span>{" "}
          of <span className="row-count ps-5 pe-5">{totalRows}</span> entries
        </span>
        <div className="d-flex align-items-center gap-3">
          <img
            src={icons?.leftIcons}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="pagoicon pointer"
          />
          <div className="d-flex gap-2">
            <span className="page-number active pointer">{currentPage}</span>
            {currentPage < totalPages && (
              <span className="page-number pointer" onClick={handleNextPageR}>
                {currentPage + 1}
              </span>
            )}
          </div>
          <img
            src={icons?.rightIcons}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="pagoicon pointer"
          />
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Table;
