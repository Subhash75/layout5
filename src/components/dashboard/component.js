import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BsPrinterFill } from "react-icons/bs";
import { FaWpforms } from "react-icons/fa";

function Component() {
  return (
    <div className="component">
      <h5>COMPONENTS</h5>
      <ul>
        <li className="icons">
          <span>
            <BsPrinterFill />
          </span>
          UI Elements<span><IoIosArrowDown /></span>
        </li>
        <li className="icons">
          <span>
            <FaWpforms />
          </span>
          Forms
          <span>
            <IoIosArrowDown />
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Component;
