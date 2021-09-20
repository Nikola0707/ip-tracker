import {AiOutlineRight} from 'react-icons/ai'

const Header = () => {
  return (
    <div className="header-container">
      <h1>IP Address Tracker</h1>
        <form action="" className="form-container">
            <div className="input-container">
                <input type="text" placeholder="Search for any IP address or domain" />
            </div>
            <div className="submit-arrow-container">
                <AiOutlineRight />
            </div>
        </form>
    </div>
  );
};

export default Header;
