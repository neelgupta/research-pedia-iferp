import React, { useState } from "react";

import SearchInput from "@/components/inputs/SearchInput";
import "./SelectedLanguagemodel.scss";
import Button from "@/components/inputs/Button";
import { Modal } from "@/components";
const SelectedLanguagemodel = ({ onHide }) => {
  const [languagelist, setlanguagelist] = useState([
    { name: "Hindi" },
    { name: "English" },
    { name: "Spanish" },
    { name: "French" },
    { name: "German" },
    { name: "Mandarin" },
    { name: "Japanese" },
    { name: "Portuguese" },
    { name: "Russian" },
    { name: "Italian" },
    { name: "Arabic" },
    { name: "Korean" },
    { name: "Bengali" },
    { name: "Urdu" },
    { name: "Turkish" },
    { name: "Dutch" },
    { name: "Greek" },
    { name: "Hebrew" },
    { name: "Thai" },
    { name: "Vietnamese" },
  ]);

  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleSelectLanguage = (lang) => {
    setSelectedLanguage(lang);
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
              <SearchInput placeholder="Search language" />
            </div>
            <div className="language-show brave-scroll-gry">
              {languagelist.map((lang, index) => (
                <div
                  key={index}
                  className={`language-item mb-18 ${
                    selectedLanguage === lang ? "selected" : ""
                  }`}
                  onClick={() => handleSelectLanguage(lang)}
                >
                  <p>{lang.name}</p>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-end mt-32">
              <Button btnText="Translate" className="w-150 h-49" />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SelectedLanguagemodel;
