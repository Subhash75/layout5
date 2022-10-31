import React from "react";
import Activity from "./activity";
import Earning from "./earning";
import Information from "./information";


function Profile( {toggleNav}) {
  return (
    <div className="profile">
     
      <Information toggleNav={toggleNav}/>
      <Earning />
      <Activity />
    </div>
  );
}

export default Profile;
