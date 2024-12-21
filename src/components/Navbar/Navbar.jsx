import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          JobPortal
        </Link>
        <div className="nav-links">
          <Link to="/jobs">Jobs</Link>
          <Link to="/services">Services</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/register" className="register-btn">Register</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;