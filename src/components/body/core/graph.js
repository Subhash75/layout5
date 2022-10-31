import React from "react";

function Graph() {
  return (
    <div className="graph">
      <div className="vertical-no">
        <p>40k</p>
        <p>30k</p>
        <p>20k</p>
        <p>10k</p>
        <p>0k</p>
      </div>
      <div className="horizontal-no">
        <p>Feb</p>
        <p>Mar</p>
        <p>Apr</p>
        <p>May</p>
        <p>Jun</p>
        <p>Jul</p>
        <p>Aug</p>
        <p>Sep</p>
        <p>Oct</p>
      </div>
      <div className="bar-container">
        <div className="bars">
          <div style={{height: '70px'}} className="double-bar"></div>
          <div style={{height: '80px'}} className="double-bar"></div>
        </div>
        <div className="bars">
          <div style={{height: '85px'}} className="double-bar"></div>
          <div style={{height: '95px'}} className="double-bar"></div>
        </div>
        <div className="bars">
          <div style={{height: '65px'}} className="double-bar"></div>
          <div style={{height: '75px'}} className="double-bar"></div>
        </div>
        <div className="bars">
          <div style={{height: '100px'}} className="double-bar"></div>
          <div style={{height: '110px'}} className="double-bar"></div>
        </div>
        <div className="bars">
          <div style={{height: '85px'}} className="double-bar"></div>
          <div style={{height: '95px'}} className="double-bar"></div>
        </div>
        <div className="bars">
          <div style={{height: '105px'}} className="double-bar"></div>
          <div style={{height: '115px'}} className="double-bar"></div>
        </div>
        <div className="bars">
          <div style={{height: '85px'}} className="double-bar"></div>
          <div style={{height: '95px'}} className="double-bar"></div>
        </div>
        <div className="bars">
          <div style={{height: '120px'}} className="double-bar"></div>
          <div style={{height: '130px'}} className="double-bar"></div>
        </div>
        <div className="bars">
          <div style={{height: '95px'}} className="double-bar"></div>
          <div style={{height: '105px'}} className="double-bar"></div>
        </div>
       
      </div>
    </div>
  );
}

export default Graph;
