import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser, faSignOutAlt, faBell} from "@fortawesome/free-solid-svg-icons";
import logoLink from "../logo-link.png";

import "./NavBar.css";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar-container">
        <img
          className="navbar-logo"
          src={logoLink}
          alt="Link-logo"
          onClick={() => (window.location.href = "/")}
        />
        <button className="navbar-button">
          <FontAwesomeIcon icon={faUser} title="Settings" 
            onClick={() => (window.location.href = "/settings")} />
        </button>
        <button className="navbar-button">
          <FontAwesomeIcon icon={faSignOutAlt} title="Logout" />
        </button>
        <button className="navbar-button">
          <FontAwesomeIcon icon={faBell} title="Notifications" />
          <span className="notification-count">3</span>
        </button>
      </nav>
    </div>
  );
}
