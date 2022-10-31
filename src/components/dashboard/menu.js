import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { MdOutlineDashboardCustomize } from "react-icons/md";

function Menu() {
  return (
    <div className="menu">
      <h5>MENU</h5>
      <ul>
        <li className="highlight icons">
          <span>
            <MdOutlineDashboardCustomize />
          </span>
          Dashboards
          <span>
            <IoIosArrowUp />
          </span>
        </li>
        <li className="highlight list-align">Ecommerce</li>
        <li className="list-align">Saas</li>
        <li className="list-align">Crypto</li>
      </ul>
    </div>
  );
}

export default Menu;
