import React, { useEffect, useRef, useState } from "react";
import { Form, InputGroup, Spinner } from "react-bootstrap";
import { Search } from "react-feather";

import "./LiteratureReview.scss";
import { icons } from "@/utils/constants";
import { LuDot } from "react-icons/lu";
const LiteratureReview = () => {
  const [search, setsearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPaper, setSelectedPaper] = useState(5);
  const [isLoading, setIsLoading] = useState(false);
  const handleSelect = (value) => {
    setSelectedPaper(value);
    setDropdownOpen(false);
  };

  const recentSearches = [
    "How does climate change impact biodiversity?",
    "What is the significance of higher-dimensional algebra?",
  ];
  const suggestions = [
    "How does climate change impact biodiversity?",
    "How does social media affect the college selection process?",
    "What are the interesting theories about dark matter and dark energy?",
    "What is the significance of higher-dimensional algebra?",
  ];

  const [searchresponse, setSearchresponse] = useState(false);

  const searchresponsedata = [
    {
      header:
        "Higher-dimensional algebra plays a crucial role in advancing mathematical structures and theories across various domains. It facilitates the understanding of complex relationships and interactions within algebraic systems, leading to significant implications in geometry, field theory, and category theory. The following points highlight its significance:",
      papers: [
        {
          headertitle: "Holography and Koszul Duality",
          title:
            "The study of higher algebraic structures reveals connections between algebra and holography, particularly through Koszul duality, which relates different algebraic frameworks and enhances the understanding of four-dimensional amplitudes(Paquette, 2024).",
        },
        {
          headertitle: "Holography and Koszul Duality",
          title:
            "The study of higher algebraic structures reveals connections between algebra and holography, particularly through Koszul duality, which relates different algebraic frameworks and enhances the understanding of four-dimensional amplitudes(Paquette, 2024).",
        },
        {
          headertitle: "Holography and Koszul Duality",
          title:
            "The study of higher algebraic structures reveals connections between algebra and holography, particularly through Koszul duality, which relates different algebraic frameworks and enhances the understanding of four-dimensional amplitudes(Paquette, 2024).",
        },
        {
          headertitle: "Holography and Koszul Duality",
          title:
            "The study of higher algebraic structures reveals connections between algebra and holography, particularly through Koszul duality, which relates different algebraic frameworks and enhances the understanding of four-dimensional amplitudes(Paquette, 2024).",
        },
        {
          headertitle: "Holography and Koszul Duality",
          title:
            "The study of higher algebraic structures reveals connections between algebra and holography, particularly through Koszul duality, which relates different algebraic frameworks and enhances the understanding of four-dimensional amplitudes(Paquette, 2024).",
        },
        {
          headertitle: "Holography and Koszul Duality",
          title:
            "The study of higher algebraic structures reveals connections between algebra and holography, particularly through Koszul duality, which relates different algebraic frameworks and enhances the understanding of four-dimensional amplitudes(Paquette, 2024).",
        },
        {
          headertitle: "Holography and Koszul Duality",
          title:
            "The study of higher algebraic structures reveals connections between algebra and holography, particularly through Koszul duality, which relates different algebraic frameworks and enhances the understanding of four-dimensional amplitudes(Paquette, 2024).",
        },
        {
          headertitle: "Holography and Koszul Duality",
          title:
            "The study of higher algebraic structures reveals connections between algebra and holography, particularly through Koszul duality, which relates different algebraic frameworks and enhances the understanding of four-dimensional amplitudes(Paquette, 2024).",
        },
      ],
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const papersToShow = showAll
    ? searchresponsedata[0].papers
    : searchresponsedata[0].papers.slice(0, 3);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="search-container d-flex flex-column justify-content-center align-items-center text-center p-4 position-relative">
        <h2 className="text-24-600 color-0303">Literature Review</h2>
        <p className="text-14-400 color-3333">
          All-in-one AI tools for students and researchers.
        </p>

        <div className="search-box position-absolute top-100 start-50 translate-middle mt-3">
          <InputGroup className="custom-input-group">
            <Form.Control
              type="text"
              placeholder="Discover papers for your research"
              value={searchTerm}
              onChange={(e) => {
                setsearch(true);
                setSearchTerm(e.target.value);
                setSearchresponse(false);
              }}
              className="custom-input"
            />
            <button className="custom-button">
              <Search size={20} />
            </button>
          </InputGroup>
        </div>
      </div>
      <div className="search-histroy d-flex  justify-content-center">
        {!searchTerm && !searchresponse && (
          <div className="search-asking brave-scroll-gry">
            <div className="suggestions ">
              <span className="text-16-500 color-0303 mb-18">
                Try asking or searching for:
              </span>
              <div className="mt-10">
                {suggestions.map((item, index) => (
                  <div key={index} className="search-item mt-2">
                    <img
                      src={icons.searchingimg}
                      className="img-fluid"
                      alt="img"
                    />{" "}
                    <span className="text-14-400 color-3333">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {search && (
          <div className="search-dropdown brave-scroll-gry">
            <div className="recent-searches">
              <span className="text-14-500 color-0303"> Recent searches</span>
              {recentSearches.map((item, index) => (
                <div
                  key={index}
                  className="search-item mt-2"
                  onClick={() => {
                    setsearch(false);
                    setSearchresponse(true);
                    setSearchTerm(item);
                  }}
                >
                  <img src={icons.Recantsimg} className="img-fluid" alt="img" />{" "}
                  <span className="text-14-400 ">{item}</span>
                </div>
              ))}
            </div>
            <div className="suggestions">
              <span className="text-14-500 color-0303">
                Try asking or searching for:
              </span>
              {suggestions.map((item, index) => (
                <div key={index} className="search-item mt-2">
                  <img
                    src={icons.searchingimg}
                    className="img-fluid"
                    alt="img"
                  />{" "}
                  <span className="text-14-400 ">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {searchresponse && (
          <div className="search-response brave-scroll-gry mt-18">
            <div className="d-flex gap-2">
              <div>
                <span className="text-16-600 color-3333">Answer from top </span>
              </div>
              <div className="d-flex">
                <div>
                  <span className="text-16-600 color-113D">
                    {selectedPaper} papers
                  </span>
                </div>
                <div className="position-relative">
                  <img
                    src={icons.downgry}
                    alt="arrow"
                    className="img-fluid ms-10 w-18 h-18 "
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    style={{ cursor: "pointer" }}
                  />
                  {dropdownOpen && (
                    <div className="dropdown">
                      {dropdownOpen && (
                        <div
                          className="dropdown-menus position-absolute top-0 start-0"
                          ref={dropdownRef}
                        >
                          <div className="dropdown-item-f pointer">
                            <div className="text-14-400 color-0303">
                              Show summarized insight of...
                            </div>
                          </div>
                          <div
                            className="dropdown-item-p pointer"
                            onClick={() => handleSelect(5)}
                          >
                            <div className="text-14-400 ">5 paper</div>
                          </div>
                          <div
                            className="dropdown-item-p pointer"
                            onClick={() => handleSelect(10)}
                          >
                            <div className=" text-14-400">10 paper</div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {isLoading ? (
              <div
                className="loader-container d-flex justify-content-center align-items-center mb-18"
                style={{ height: "100%" }}
              >
                <Spinner animation="border" variant="primary" />
              </div>
            ) : (
              <div className="">
                <div className="search-results">
                  <div className="mt-24">
                    <p className="text-14-400 color-0303">
                      {searchresponsedata[0].header}
                    </p>
                  </div>
                  {papersToShow.map((paper, index) => (
                    <div key={index} className="search-result mt-18">
                      <div className="result-header">
                        <h3 className="text-20-600 color-3333">
                          {paper.headertitle}
                        </h3>
                        <div className="d-flex">
                          <div>
                            <LuDot size={26} />
                          </div>
                          <div>
                            {" "}
                            <span className="text-14-400 color-3333">
                              {paper.title}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="toggle-btn"
                  onClick={toggleShowAll}
                  style={{ cursor: "pointer" }}
                >
                  <span className="text-14-400 color-3333">
                    {showAll ? "Show Less" : "Read More"}
                  </span>
                  <img
                    src={icons.downgry}
                    alt="arrow"
                    className="img-fluid ms-10 w-18 h-18"
                  />
                </div>

                <div className="d-flex gap-1 mt-18">
                  <div>
                    <img
                      src={icons.bookIconsB}
                      alt="book"
                      className="img-fluid w-18 h-18"
                    />
                  </div>
                  <div className="text-14-400 color-3333">Save to Notebook</div>
                </div>
              </div>
            )}

            {/* Toggle button */}
          </div>
        )}
      </div>
    </div>
  );
};

export default LiteratureReview;
