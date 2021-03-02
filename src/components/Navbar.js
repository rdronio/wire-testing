import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../logo.svg';

const Navbar = () => {
  const title = 'Clipex Wire Testing';

  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <nav>
      <div id="title-container">
        {/* <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg> */}

        <h1>{title}</h1>
      </div>
      <div className="block lg:hidden">
        <button id="menu" onClick={handleToggle}>
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={` w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isActive ? 'block' : 'hidden'
        }`}
      >
        <div id="links-container">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/summary" className="link">
            New Results
          </Link>
          <Link to="/account" className="link">
            Account
          </Link>
        </div>
        <div>
          <Link to="/login" id="login-button">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
