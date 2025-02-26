import React, { useCallback, useEffect, useRef, useState } from "react";
import { Form, InputGroup, Spinner } from "react-bootstrap";
import { Search } from "react-feather";
import { useLocation } from "react-router-dom";
import "./LiteratureReview.scss";
import { icons } from "@/utils/constants";
import { LuDot } from "react-icons/lu";
import {
  Literaturesearch,
  LiteraturesearchResult,
  SaveToNote,
} from "@/store/userSlice/projectSlice";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";

const LiteratureReview = () => {
  const [search, setsearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPaper, setSelectedPaper] = useState(5);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const location = useLocation();
  const { searchitem } = location.state || {};
  const [responseloader, setresponseloader] = useState(false);
  const dispatch = useDispatch();

  const [recentSearches, setrecentSearches] = useState([]);

  const suggestions = [
    "How does climate change impact biodiversity?",
    "How does social media affect the college selection process?",
    "What are the interesting theories about dark matter and dark energy?",
    "What is the significance of higher-dimensional algebra?",
  ];

  const [searchresponse, setSearchresponse] = useState(false);

  const [searchresponsedata, setsearchresponsedata] = useState();

  // [
  // {
  //   paperId: "c2e1d272ba493fcdba5290b541d040749859c0bc",
  //   url: "https://www.semanticscholar.org/paper/c2e1d272ba493fcdba5290b541d040749859c0bc",
  //   title:
  //     "Searching for the Sources of Excess Extragalactic Dispersion of FRBs",
  //   abstract:
  //     "The FLIMFLAM survey is collecting spectroscopic data of field galaxies near fast radio burst (FRB) sight lines to constrain key parameters describing the distribution of matter in the Universe. In this work, we leverage the survey data to determine the source of the excess extragalactic dispersion measure (DM), compared to Macquart relation estimates of four FRBs: FRB20190714A, FRB20200906A, FRB20200430A, and FRB20210117A. By modeling the gas distribution around the foreground galaxy halos and galaxy groups of the sight lines, we estimate DMhalos, their contribution to the FRB DMs. The FRB20190714A sight line shows a clear excess of foreground halos which contribute roughly two-thirds of the observed excess DM, thus implying a sight line that is baryon dense. FRB20200906A shows a smaller but nonnegligible foreground halo contribution, and further analysis of the intergalactic medium is necessary to ascertain the true cosmic contribution to its DM. FRB20200430A and FRB20210117A show negligible foreground contributions, implying a large host galaxy excess and/or progenitor environment excess.",

  //   summary:
  //     "Title: Searching for the Sources of Excess Extragalactic Dispersion of FRBs\nAbstract: The FLIMFLAM survey is collecting spectroscopic data of field galaxies near fast radio burst (FRB) sight lines to constrain key parameters describing the distribution of matter in the Universe. This work utilizes the survey data to determine the source of the excess extragalactic dispersion measure (DM) for four FRBs. The analysis reveals that the excess DM in FRB20190714A is mainly contributed by baryon-dense foreground halos, while FRB20200906A shows a smaller contribution. FRB20200430A and FRB20210117A exhibit negligible foreground contributions, suggesting large host galaxy or progenitor environment excess.",
  // },
  // {
  //   paperId: "fa8945d48570614528e6f37866ba6bb8fe08ed45",
  //   url: "https://www.semanticscholar.org/paper/fa8945d48570614528e6f37866ba6bb8fe08ed45",
  //   title:
  //     "Collaborative Human Recognition With Lightweight Models in Drone-Based Search and Rescue Operations",
  //   abstract:
  //     "Due to the flexibility of drones, it is promising to use them in Search and Rescue (SAR) operations for intelligently searching for lost humans over large areas. However, the limited computing resources of drones pose challenges when deploying deep neural network models. To address this problem, we design a lightweight human recognition model for drones, combining the Ghost Module and the Mobilenetv3 Block. The Ghost Module generates more feature maps with fewer parameters, and the squeeze-and-excitation (SE) attention module in the Mobilenetv3 Block greatly improves recognition accuracy. Furthermore, recognizing that relying solely on the human recognition model offers limited assistance in SAR operations, we propose a collaborative recognition mode between the drone and the rescue command center (RCC). In this collaborative recognition mode, we design an offloading model for deployment on the drone. The offloading model learns from the middle layer perception features of the lightweight recognition model and selectively offloads the vision taken by the drone to the RCC. The recognition results provided by the RCC are used to update the parameters of the offloading model. We introduce a reinforcement learning algorithm, a dual-buffer-based proximal policy optimization algorithm (DBPPO), to train the offloading model with the goal of maximizing accuracy and recall while minimizing the offloading ratio. Specifically, we incorporate an additional data buffer for training the Actor network in the PPO algorithm in a supervised manner, with supervised training interspersed throughout the PPO training process. Eventually, experiments comparing different methods demonstrate the effectiveness of the lightweight recognition model and the collaborative recognition mode in SAR operations.",

  //   summary:
  //     "Title: Collaborative Human Recognition With Lightweight Models in Drone-Based Search and Rescue Operations\nAbstract: This study proposes a lightweight human recognition model for drones in Search and Rescue (SAR) operations, combining the Ghost Module and Mobilenetv3 Block to address computing resource limitations. A collaborative recognition mode between drones and the rescue command center (RCC) is introduced, utilizing an offloading model to maximize recognition accuracy and recall while minimizing offloading ratio. The study showcases the effectiveness of the lightweight recognition model and collaborative recognition mode in SAR operations through experimental comparisons.",
  // },
  // ]

  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const papersToShow = showAll
    ? searchresponsedata
    : searchresponsedata?.slice(0, 3);

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

  useEffect(() => {
    if (searchitem) {
      setSearchresponse(true);
    }
    setSearchTerm(searchitem);
  }, []);

  const debouncedApiCall = useCallback(
    debounce((searchTerm) => {
      setDebouncedSearchTerm(searchTerm);
    }, 400),
    []
  );

  const handleSearch = (e) => {
    debouncedApiCall(e.target.value);
  };

  // Fetch search results
  const fetchSearch = async () => {
    try {
      const res = await dispatch(Literaturesearch(debouncedSearchTerm));
      setrecentSearches(res?.data?.response);
    } catch (error) {
      console.error("Error fetching audio:", error);
    }
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearch();
    }
  }, [debouncedSearchTerm]);

  const fetchresult = async (title) => {
    setresponseloader(true);
    try {
      const res = await dispatch(
        LiteraturesearchResult({ title, selectedPaper })
      );
      // setsearchresponsedata(res?.data?.response);
      setsearchresponsedata(res?.data?.response);
      setresponseloader(false);
    } catch (error) {
      console.error("Error fetching audio:", error);
    }
    setresponseloader(false);
  };

  const handleSelect = (value) => {
    setSelectedPaper(value);
    setDropdownOpen(false);
  };

  // const fetchwithlimit = async (limit) => {
  //   const title = searchTerm;
  //   const selectedPaper = limit;
  //   setresponseloader(true);
  //   try {
  //     const res = await dispatch(
  //       LiteraturesearchResult({ title, selectedPaper })
  //     );
  //     // setsearchresponsedata(res?.data?.response);
  //     setsearchresponsedata(res?.data?.response);
  //     setresponseloader(false);
  //   } catch (error) {
  //     console.error("Error fetching audio:", error);
  //   }
  //   setresponseloader(false);
  // };

  const SaveToNotebook = async () => {
    const filteredData = searchresponsedata.map((item) => ({
      title: item.title,
      summary: item.summary,
    }));

    console.log("filteredData", filteredData);

    try {
      const res = await dispatch(SaveToNote(filteredData));
    } catch (error) {
      console.error("Error fetching audio:", error);
    }
  };
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
                handleSearch(e);
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

        {search && searchTerm && (
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
                    setSearchTerm(item.title);
                    fetchresult(item.title);
                  }}
                >
                  <img src={icons.Recantsimg} className="img-fluid" alt="img" />{" "}
                  <span className="text-14-400 ">{item.title}</span>
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
                            onClick={() => {
                              handleSelect(5);
                              // fetchwithlimit();
                            }}
                          >
                            <div className="text-14-400 ">5 paper</div>
                          </div>
                          <div
                            className="dropdown-item-p pointer"
                            onClick={async () => {
                              await handleSelect(10);
                              // fetchwithlimit(10);
                            }}
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
            {responseloader ? (
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
                    {/* <p className="text-14-400 color-0303">
                      {searchresponsedata[0].header}
                    </p> */}
                  </div>
                  {papersToShow?.map((paper, index) => (
                    <div key={index} className="search-result mt-18">
                      <div className="result-header">
                        <h3 className="text-20-600 color-3333">
                          {paper.title}
                        </h3>
                        <div className="d-flex">
                          <div>
                            <LuDot size={26} />
                          </div>
                          <div>
                            <span className="text-14-400 color-3333">
                              {paper.summary}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {searchresponsedata?.length > 3 && (
                  <div
                    className="toggle-btn"
                    onClick={toggleShowAll}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="text-14-400 color-3333">
                      {showAll ? "Show Less" : "Read More"}
                    </span>
                    <img
                      src={icons.downgry} // Replace with the path to your arrow icon
                      alt="arrow"
                      className="img-fluid ms-10 w-18 h-18"
                    />
                  </div>
                )}

                <div
                  className="d-flex gap-1 mt-18"
                  onClick={() => SaveToNotebook()}
                  style={{ cursor: "pointer" }}
                >
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
