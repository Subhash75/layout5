import React from "react";
import Graph from "./graph";
import Stats from "./stats";

function Core() {
  return (
    <div className="core">
      <p>Overview</p>
      <Stats />
      <Graph />
    </div>
  );
}

export default Core;
