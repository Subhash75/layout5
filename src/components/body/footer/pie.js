import React from "react";

function Pie() {
  return (
    <div className="pie">
      <div className="header">
        <p>Order Stats</p>
        <p>•••</p>
      </div>
      <div className="pie-diagram">
        <div className="first"></div>
        <div className="second"></div>
        <div className="third"></div>
      </div>
      <div className="list">
        <p>Completed</p>
        <p>Pending</p>
        <p>Cancel</p>
      </div>
    </div>
  );
}

export default Pie;
