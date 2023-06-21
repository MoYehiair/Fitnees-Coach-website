import React from "react";
import "./Join.css";
const Join = () => {
  return (
    <div className="join" id="join">
      <div></div>
      <div className="join-text">
        <div>
          <span className="stroke-text">READY TO </span>
          <span> LEVEL UP </span>
        </div>
        <div>
          {" "}
          <span>YOUR BODY </span>
          <span className="stroke-text">WITH ME?</span>
        </div>
      </div>
      <div className="input">
        <form>
          <input
            placeholder="Enter Your Address Email Here"
            name="user_email"
            type="name"
          />{" "}
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfEITs9GtDkg5h-XRVXZRq9T9ujIZ4hJS2dRaGadB0JM2Tm5g/viewform"
            rel="noreferrer"
          >
            Join Now
          </a>
        </form>
      </div>
    </div>
  );
};

export default Join;
