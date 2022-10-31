import React from "react";

function HeaderSection({ icon, title, cost, performance }) {
  return (
    <div className="header-section">
      <div>
        <span>{icon}</span>
      </div>
      <div>
        <p>{title}</p>
        <p>{cost}</p>
      </div>
      <p>{performance}</p>
    </div>
  );
}

export default HeaderSection;
