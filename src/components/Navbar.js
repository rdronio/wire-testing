import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../logo.svg';

import logo from '../images/logo.png';

const Navbar = () => {
  const title = 'Clipex Wire Testing';

  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <nav>
      <Link to="/" className="link hidden">
        <i class="fas fa-tachometer-alt" title="Dashboard"></i>
        <span className="link-label">Dashboard</span>
      </Link>
      <Link to="/summary" className="link hidden">
        <i class="fas fa-table" title="Reports"></i>
        <span className="link-label">Reports</span>
      </Link>

      <Link to="/account" className="link hidden">
        <i class="fas fa-user-circle" title="Account"></i>
        <span className="link-label">Account</span>
      </Link>
      <Link to="/login" id="login-button">
        Login
      </Link>
      <Link to="/" className="link hidden">
        <i class="fas fa-sign-out-alt" title="Logout"></i>
        <span className="link-label">Logout</span>
      </Link>
    </nav>
  );
};

export default Navbar;
