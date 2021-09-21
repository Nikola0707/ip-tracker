// Redux
import { useSelector } from "react-redux";

import React from "react";
const Info = () => {
  // Redux State
  const {userData}= useSelector((state) => state.requestUserData);
  
  return (
    <div className="info-container">
      <div>
        <div className="title">
          <p>IP ADDRESS</p>
        </div>
        <div className="value">{userData.ip}</div>
      </div>
      <div className="border-left-right">
        <div className="title">
          <p>LOCATION</p>
          <div className="value">{userData.city}, {userData.country} {userData.postalcode}</div>
        </div>
      </div>
      <div className="border-right">
        <div className="title">
          <p>TIMEZONE</p>
          <div className="value">{userData.timeZone}</div>
        </div>
      </div>
      <div>
        <div className="title">
          <p>ISP</p>
          <div className="value">{userData.isp}</div>
        </div>
      </div>
    </div>
  );
};
export default Info;
