import React from "react";
import Activity from "./activity";
import Pie from "./pie";
import Prodcuts from "./topproducts";

function Footer() {
  return (
    <div className="footer">
      <Activity />
      <Pie />
      <Prodcuts />
    </div>
  );
}

export default Footer;
