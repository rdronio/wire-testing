import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../logo.svg';

import logo from '../images/CWTS-logo-with-name-outlined.png';
import userEvent from '@testing-library/user-event';

const Navbar = () => {
  const title = 'Clipex Wire Testing';
  const username = 'John Doe';
  const email = 'johndoe@clipex.com';

  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => setToggleMenu(!toggleMenu);

  const [navbarLinks, setNavbarLinks] = useState([
    {
      label: 'Dashboard',
      type: 'centre',
      path: '/dashboard',
      cName: 'active',
      icon: <i className="fas fa-tachometer-alt" title="Dashboard"></i>,
    },
    {
      label: 'Reports',
      type: 'centre',
      path: '/summary',
      cName: '',
      icon: <i className="fas fa-table" title="Reports"></i>,
    },

    {
      label: 'Your Profile',
      type: 'user-menu',
      path: '/profile',
      cName: 'active',
      icon: <i className="fas fa-tachometer-alt" title="Dashboard"></i>,
    },
    {
      label: 'Settings',
      type: 'user-menu',
      path: '/settings',
      cName: '',
      icon: <i className="fas fa-table" title="Reports"></i>,
    },
    {
      label: 'Sign out',
      type: 'user-menu',
      path: '/',
      cName: '',
      icon: <i className="fas fa-user-circle" title="Account"></i>,
    },
  ]);

  const handleNavbarLinks = (index) => {
    setNavbarLinks.cName = 'active';
  };

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                src={logo}
                alt="Clipex Wire Testing System Logo"
                className="w-32 shadow-lg "
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                {navbarLinks
                  .filter((item) => item.type === 'centre')
                  .map((filteredItem, index) => {
                    return (
                      <Link
                        to={filteredItem.path}
                        key={index}
                        className="nav-items-desktop"
                        onClick={handleNavbarLinks(index)}
                      >
                        <span>{filteredItem.label}</span>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">View notifications</span>
                {/* <!-- Heroicon name: outline/bell --> */}
                <svg
                  className="h-6 w-6"
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>

              {/* <!-- Profile dropdown --> */}
              <div className="ml-3 relative">
                <div>
                  <button
                    className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    {/* <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
                  </button>
                </div>
                {/* <!--
                    Profile dropdown panel, show/hide based on dropdown state.

                    Entering: "transition ease-out duration-100"
                      From: "transform opacity-0 scale-95"
                      To: "transform opacity-100 scale-100"
                    Leaving: "transition ease-in duration-75"
                      From: "transform opacity-100 scale-100"
                      To: "transform opacity-0 scale-95"
                  --> */}
                <div
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Your Profile
                  </a>

                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Settings
                  </a>

                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* <!-- Mobile menu button --> */}
            <button
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={handleToggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {/* <!--
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
              {/* <!--
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
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className={toggleMenu ? 'md:hidden ' : 'hidden'}>
        <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navbarLinks
            .filter((item) => item.type === 'centre')
            .map((filteredItem, index) => {
              return (
                <Link to={filteredItem.path} key={index} className="nav-items">
                  <span>{filteredItem.label}</span>
                </Link>
              );
            })}
        </nav>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              {/* <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-white">
                {username}
              </div>
              <div className="text-sm font-medium leading-none text-gray-400">
                {email}
              </div>
            </div>
            <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">View notifications</span>
              {/* <!-- Heroicon name: outline/bell --> */}
              <svg
                className="h-6 w-6"
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
          </div>
          <div className="mt-3 px-2 space-y-1">
            {navbarLinks
              .filter((item) => item.type === 'user-menu')
              .map((filteredItem, index) => {
                return (
                  <Link
                    to={filteredItem.path}
                    key={index}
                    className="nav-items"
                  >
                    <span>{filteredItem.label}</span>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
