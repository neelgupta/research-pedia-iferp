import React, { useEffect, useState } from "react";
import Select from "react-select";
import "./DropdownWithTags.scss";
import { icons } from "@/utils/constants";
import { ErrorMessage } from "formik";

const DropdownWithTags = ({ options, name, value, onSelectionChange }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [tags, setTags] = useState([]); // For topics
  const [inputValue, setInputValue] = useState(""); // For topic input

  const handleCategoryChange = (selected) => {
    const category = selected ? selected.value : null;
    setSelectedCategory(category);
    onSelectionChange({ category, topics: tags }); // Pass updated values
  };

  useEffect(() => {
    setSelectedCategory(value?.category || "");
    setTags(value?.topics || []);
  }, [value]);

  const handleAddTag = () => {
    if (inputValue.trim() !== "") {
      const newTags = [...tags, inputValue.trim()];
      setTags(newTags);
      setInputValue("");
      onSelectionChange({ category: selectedCategory, topics: newTags }); // Pass updated values
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(newTags);
    onSelectionChange({ category: selectedCategory, topics: newTags }); // Pass updated values
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  return (
    <div id="dropdownwithtags">
      <div className="category-text mt-26 mb-8">
        <p>Research Category</p>
      </div>
      <Select
        options={options}
        onChange={handleCategoryChange}
        placeholder="Select an option..."
        value={options.find((option) => option.value === selectedCategory)}
        className="text-start"
      />
       <ErrorMessage name={`${name}.category`} component="div" className="error-text" style={{color : "red"}}/>
      <div className="tag">
        <p className="tag-text text-start mt-16 mb-8">Research Topic</p>
        <div className="selected-tag border p-10 text-start">
          {tags.map((tag, index) => (
            <span key={index} className="text-start">
              {tag}
              <img
                src={icons.tagClose}
                alt="tagClose"
                className="img-fluid ms-8"
                onClick={() => handleRemoveTag(tag)}
              />
            </span>
          ))}
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a tag and press Enter"
            className="tag-input"
          />
        </div>
        <ErrorMessage name={`${name}.topics`} component="div" className="error-text" style={{color : "red"}} />
      </div>
    </div>
  );
};

export default DropdownWithTags;