import React from "react";

import { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

// Redux
import { useDispatch, useSelector } from "react-redux";

import {
  requestUserDataPending,
  requestUserDataSuccess,
  requestUserDataFailed,
} from "../../redux/actions/actions";

const Header = () => {
  const [userIp, setUserIp] = useState("");
  const [value, setValue] = useState(userIp);
  const [fetching, setFetching] = useState(false);
  const [ipData, setIpData] = useState([]);

  // Redux
  const dispatch = useDispatch();
  const { useData, status, error } = useSelector(
    (state) => state.requestUserData
  );

  const getUserIpAddress = () => {
    setFetching(true);
    fetch(
      `https://geolocation-db.com/json/${process.env.REACT_APP_USER_IP_ADDRESS}`
    )
      .then((response) => response.json())
      .then((data) => setUserIp(data.IPv4))
      .catch((e) => console.log(e))
      .finally(() => setFetching(false));
  };

  const ipGeolocationDataFetch = () => {
    dispatch(requestUserDataPending());

    fetch(
      `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IP_GEO_TOKEN}&ipAddress=${value}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response);
      })
      .then((data) => {
        const { ip, location, isp } = data;
        dispatch(
          requestUserDataSuccess({
            ip,
            region: location.region,
            timeZone: location.timezone,
            postalcode: location.postalcode,
            city: location.city,
            lat: location.lat,
            lng: location.lng,
            isp,
          })
        );
      })
      .catch((e) => dispatch(requestUserDataFailed(e)));
  };

  useEffect(() => {
    getUserIpAddress();
    ipGeolocationDataFetch();
  }, []);

  return (
    <div className="header-container">
      <h1>IP Address Tracker</h1>
      <form
        action="GET"
        className="form-container"
        onSubmit={() => ipGeolocationDataFetch}
      >
        <div className="input-container">
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="submit-arrow-container">
          <AiOutlineRight />
        </div>
      </form>
    </div>
  );
};

export default Header;
