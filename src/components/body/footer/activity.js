import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import SVG from "./svg";

function Activity() {
  return (
    <div className="user-activity">
      <div className="header">
        <p>User Activity</p>
        <p>Weekly</p>
        <p>
          <IoIosArrowDown />
        </p>
      </div>
      <div className="mid-section">
        <p>
          This Month
          <br />
          <span>16,543</span>
        </p>
        <div className="icons">
          <p>
            <span></span>
            Current
          </p>
          <p>
            <span></span>
            Previous
          </p>
        </div>
      </div>
      <div className="graph">
        <div className="graph-numbers">
          <p>100</p>
          <p>80</p>
          <p>60</p>
          <p>40</p>
          <p>20</p>
          <p>0</p>
        </div>
       <SVG />
      </div>
    </div>
  );
}

export default Activity;
