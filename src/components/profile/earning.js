import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

function Earning() {
  return (
    <div className="earning ">
      <div className="earning-heading">
        <p>Earning</p>
        <p><AiOutlineInfoCircle /></p>
      </div>
      <div className="circle">
        <div className="half-circle"></div>
        <div className="half-circle-content">65%</div>
      </div>
      <div className="earning-content">
        <p>$26,256</p>
        <p>Earning this month</p>
        <p>
          <span>+ 2.65%</span> From previous period
        </p>
      </div>
    </div>
  );
}

export default Earning;
