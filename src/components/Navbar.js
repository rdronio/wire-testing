import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../logo.svg";

import logo from "../images/logo.png";

const Navbar = () => {
  const title = "Clipex Wire Testing";

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    // <nav>
    //   <div id="title-container">
    //     {/* <svg
    //       classNameName="fill-current h-8 w-8 mr-2"
    //       width="54"
    //       height="54"
    //       viewBox="0 0 54 54"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
    //     </svg> */}

    //     <h1>{title}</h1>
    //   </div>
    //   <div classNameName="block lg:hidden">
    //     <button id="menu" onClick={handleToggle}>
    //       <svg
    //         classNameName="fill-current h-3 w-3"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <title>Menu</title>
    //         <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    //       </svg>
    //     </button>
    //   </div>
    //   <div
    //     classNameName={` w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
    //       isActive ? 'block' : 'hidden'
    //     }`}
    //   >
    //     <div id="links-container">
    //       <Link to="/" classNameName="link">
    //         Home
    //       </Link>
    //       <Link to="/summary" classNameName="link">
    //         New Results
    //       </Link>
    //       <Link to="/account" classNameName="link">
    //         Account
    //       </Link>
    //     </div>
    //     <div>
    //       <Link to="/login" id="login-button">
    //         Login
    //       </Link>
    //     </div>
    //   </div>
    // </nav>

    <nav>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* <!-- Icon when menu is closed. -->
          <!--
            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          --> */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* <!-- Icon when menu is open. -->
          <!--
            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          --> */}
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img className="w-52" src={logo} alt="logo" />
              {/* <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
          <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow"> */}
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <Link to="/" className="link active">
                  Home
                </Link>
                <Link to="/summary" className="link">
                  Reports
                </Link>
                <Link to="/account" className="link">
                  Account
                </Link>
                <Link to="/login" id="login-button">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <Link
            to="/"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/summary"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Report
          </Link>
          <Link
            to="account"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Account
          </Link>
          <Link
            to="/login"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
