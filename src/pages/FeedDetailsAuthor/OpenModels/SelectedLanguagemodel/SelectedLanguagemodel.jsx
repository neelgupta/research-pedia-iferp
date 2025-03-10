import React, { useEffect, useState } from "react";

import SearchInput from "@/components/inputs/SearchInput";
import "./SelectedLanguagemodel.scss";
import Button from "@/components/inputs/Button";
import { Modal } from "@/components";
import { Spinner } from "react-bootstrap";
import {
  getTranslaterabstarct,
  googlelanguageTranslater,
} from "@/store/userSlice/projectSlice";
import { useDispatch, useSelector } from "react-redux";
import { LuAngry } from "react-icons/lu";
import {
  setAbstarctTranslate,
  setAbstarctTranslateText,
} from "@/store/globalSlice";
const SelectedLanguagemodel = ({ onHide, abstract }) => {
  const [languagelist, setlanguagelist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [languageselete, setlanguageselete] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [Translateloader, setTranslateloader] = useState(false);
  const Translate = useSelector((state) => state.global.abstarctTranslate);

  const handleSelectLanguage = (lang) => {
    setSelectedLanguage(lang);
    setlanguageselete(lang.language);
  };

  const dispatch = useDispatch();
  const fetchlanguageTranslater = async () => {
    setIsLoading(true);
    try {
      const res = await dispatch(googlelanguageTranslater(searchValue));

      if (res?.status === 201) {
        setlanguagelist(res?.data?.response);
        setIsLoading(false);
      }
    } catch (error) {
      // setIsLoading(false)
      console.error("Error fetching audio:", error);
    }
  };

  useEffect(() => {
    fetchlanguageTranslater();
  }, [searchValue]);

  const handleTranslate = async () => {
    setTranslateloader(true);
    try {
      const res = await dispatch(
        getTranslaterabstarct({
          abstract: abstract,
          language: languageselete,
        })
      );

      if (res.status === 201) {
        // Handle successful response
        dispatch(setAbstarctTranslate(true));
        dispatch(setAbstarctTranslateText(res.data.response));
      }
    } catch (error) {
      // Handle error
      console.error("Error fetching translation:", error);
    } finally {
      // Ensure loader is hidden and onHide is called once translation is done
      setTranslateloader(false);
      onHide();
    }
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    console.log("Search Value: ", e.target.value);
  };

  return (
    <div>
      <Modal onHide={onHide} size="md">
        <div id="SelectedLanguagemodel">
          <div className="mb-32">
            <h1 className="text-18-500 color-0303">Translate To</h1>
          </div>
          <div>
            <div className="search-box mb-18">
              <SearchInput
                placeholder="Search language"
                value={searchValue} // Bind the value here
                onChange={handleSearchChange}
              />
            </div>
            {isLoading ? (
              <div
                className="loader-container d-flex justify-content-center align-items-center"
                style={{ height: "100%" }}
              >
                <Spinner animation="border" variant="primary" />
              </div>
            ) : (
              <div className="language-show brave-scroll-gry">
                {languagelist.map((lang, index) => (
                  <div
                    key={index}
                    className={`language-item mb-18 ${
                      selectedLanguage === lang ? "selected" : ""
                    }`}
                    onClick={() => handleSelectLanguage(lang)}
                  >
                    <p className="text-16-400">{lang.name}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="d-flex justify-content-end mt-32">
              <Button
                btnText="Translate"
                className="w-128 h-49"
                onClick={() => {
                  handleTranslate();
                }}
                loading={Translateloader}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SelectedLanguagemodel;
