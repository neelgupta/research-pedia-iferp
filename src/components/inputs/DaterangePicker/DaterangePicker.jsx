import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // Main style file
import "react-date-range/dist/theme/default.css"; // Theme CSS file
import { icons } from "@/utils/constants";

const DaterangePicker = ({ onDateSelect }) => {
  const [isPickerOpen, setPickerOpen] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: null, 
      endDate: null,  
      key: "selection",
    },
  ]);

  const handleSelect = (ranges) => {
    setRange([ranges.selection]);
    onDateSelect && onDateSelect(ranges.selection); 
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => setPickerOpen(!isPickerOpen)}
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          background: "#fff",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minWidth: "200px",
        }}
      >
        <span className="text-14-400 color-bec8">
          {range[0].startDate && range[0].endDate
            ? `${format(range[0].startDate, "MM/dd/yyyy")} - ${format(
                range[0].endDate,
                "MM/dd/yyyy"
              )}`
            : "Select date range"} 
        </span>
        {/* <span style={{ marginLeft: "8px" }}>📅</span> */}
        <img src={icons.calander} alt="calander" className="img-fluid w-16 h-16"/>
      </button>

      {isPickerOpen && (
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          <DateRange
            ranges={range}
            onChange={handleSelect}
            moveRangeOnFirstSelection={false}
          />
          <button
            onClick={() => setPickerOpen(false)}
            style={{
              marginTop: "10px",
              padding: "5px 10px",
              border: "none",
              background: "#007BFF",
              color: "#fff",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
};

export default DaterangePicker;