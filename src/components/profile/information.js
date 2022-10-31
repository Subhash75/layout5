import React from "react";
import myImage from "../images/profile1.jpg";

function Information({ toggleNav }) {
  return (
    <div className="information">
    <span>Click on dots</span>
      <p className="toggle-nav" onClick={toggleNav}>
        ···
      </p>
      <p className="toggle-nav2" >
        ···
      </p>
      <div className="background"></div>
      <div className="img">
        <img src={myImage} alt="profile-pic" />
      </div>
      <div className="info">
        <div>
          <p>Subhash Ghosh</p>
          <p>Product Designer</p>
        </div>
        <div>
          <div>
            <p>
              <span>1,269</span>
            </p>
            <p>Products</p>
          </div>
          <div>
            <p>
              <span>5.2k</span>
            </p>
            <p>Followers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
