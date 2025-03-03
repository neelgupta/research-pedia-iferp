import { SearchInput } from "@/components";
import { icons } from "@/utils/constants";
import React, { useState } from "react";
import "./EditPreferencesSearch.scss";

const EditPreferencesSearch = () => {
  const [suggestedTopics, setSuggestedTopics] = useState([
    { title: "#Test Items" },
    { title: "#Test Items" },
    { title: "#Test Items" },
    { title: "#Test Items" },
    { title: "#Test Items" },
    { title: "#Test Items" },
    { title: "#Test Items" },
  ]);

  return (
    <div id="EditPreferencesSearch">
      <div>
        <p className="text-18-500 color-0303">Search for a specific Topic</p>
      </div>
      <div className="mt-12 mb-12">
        <SearchInput placeholder="Search for a specific Topic" />
      </div>

      <div>
        <p className="text-14-400 color-3333">
          Suggested topics for you, Suggestions are based on your activity.
        </p>

        <div>
          {suggestedTopics.map((item, index) => (
            <div
              className="search-list d-flex justify-content-between py-18"
              key={index}
            >
              <div>
                <p className="text-14-400 color-3333">{item.title}</p>
              </div>
              <div className="d-flex gap-2">
                <div>
                  <img src={icons.block} alt="Block" />
                </div>
                <div>
                  <img src={icons.Add} alt="Add" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditPreferencesSearch;
