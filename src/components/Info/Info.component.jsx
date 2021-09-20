const Info = () => {
  return (
    <div className="info-container">
      <div>
        <div className="title">
          <p>IP ADDRESS</p>
        </div>
        <div className="value">192.212.174.101</div>
      </div>
      <div className="border-left-right">
        <div className="title">
          <p>LOCATION</p>
          <div className="value">10001</div>
        </div>
      </div>
      <div className="border-right">
        <div className="title">
          <p>TIMEZONE</p>
          <div className="value">UTC -05:00</div>
        </div>
      </div>
      <div>
        <div className="title">
          <p>ISP</p>
          <div className="value">SpaceX Starlink</div>
        </div>
      </div>
    </div>
  );
};
export default Info;
