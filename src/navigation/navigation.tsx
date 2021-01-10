import { NavLink } from 'react-router-dom';

import Logo from './assets/logo.png';

import './navigation.css';

const Navigation = () => {
  return (
    <div className="menu">
      <div className="logo">
        <a to="https://requestum.com/">
          <img src={Logo} alt="requestum" />
        </a>
      </div>
      <div className="other-links">
        <NavLink className="menu-link" to="/">
          Github
        </NavLink>
        <NavLink className="menu-link" to="/users">
          users
        </NavLink>
        <NavLink className="menu-link" to="/search">
          search
        </NavLink>
        <NavLink className="menu-link" to="/app">
          app
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
