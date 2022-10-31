import React from "react";

function Activity() {
  return (
    <div className="activity">
      <p>Recent Activity</p>
      <div className="events">
        <div className="row row-1">
          <p>
            <b>12</b><br></br>Sep
          </p>
          <p>Responded to need "Volunteer Activities"</p>
        </div>
        <div className="row row-2">
          <p>
          <b>11</b><br></br>Sep
          </p>
          <p>
            Everyone realizes would be desirable...<br></br>
            <span>Read more</span>
          </p>
        </div>
        <div className="row row-3">
          <p>
          <b>10</b><br></br>Sep
          </p>
          <p>Joined this group "Boardsmanship Forum"</p>
        </div>
      </div>
    </div>
  );
}

export default Activity;
