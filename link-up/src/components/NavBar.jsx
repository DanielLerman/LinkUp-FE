import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import logoLink from "../logo-link.png";
import navBar from "../styles/navBar.css"

export default function NavBar() {
  return (
    <div>
      <nav className="navbar-container">
        <img className="navbar-logo" src={logoLink} alt="Link-logo" onClick={() => window.location.href = "/"} />
        <button className="navbar-button">
          <FontAwesomeIcon icon={faCog} title="Settings" />
        </button>
        <button className="navbar-button">
          <FontAwesomeIcon icon={faSignOutAlt} title="Logout" />
        </button>
      </nav>
    </div>
  );
}
