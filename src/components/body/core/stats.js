import React from "react";

function Stats() {
  return (
    <div className="stats">
      <div>
        <p>This Month</p>
        <p>
          $24,568
          <span>+2.65%</span>
        </p>
      </div>
      <div className="stats-details">
        <div>
          <p>Orders</p>
          <p>5,643</p>
        </div>
        <div>
          <p>Sales</p>
          <p>16,273</p>
        </div>
        <div>
          <p>Order Value</p>
          <p>12.03%</p>
        </div>
        <div>
          <p>Customers</p>
          <p>21,456</p>
        </div>
        <div>
          <p>Income</p>
          <p>$35,652</p>
        </div>
        <div>
          <p>Expenses</p>
          <p>$12,248</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
