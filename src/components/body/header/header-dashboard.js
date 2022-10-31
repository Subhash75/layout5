import React from "react";
import HeaderSection from "./headerSection";
import { AiFillPieChart, AiTwotoneShopping } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";

function HeaderDashboard() {
  return (
    <div className="header-db">
      <p>Dashboard</p>
      <HeaderSection icon={<AiFillPieChart/>} title="Revenue" cost="$21,456" performance="+2.65%" />
      <HeaderSection icon={<AiTwotoneShopping />} title="Orders" cost="5643" performance="-0.82%" />
      <HeaderSection icon={<BsFillPeopleFill />} title="Customers" cost="45,254" performance="-1.04%" />
    </div>
  );
}

export default HeaderDashboard;
