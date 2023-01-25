import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser, faSignOutAlt, faBell} from "@fortawesome/free-solid-svg-icons";
import logoLink from "../logo-link.png";
import ModalLoginSign from "../pages/ModalLoginSign";
import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
 <>
      <nav className="navbar-container">
        <NavLink activeclassname="active" to="/"><img   className="navbar-logo" src={logoLink}/></NavLink>
        {/* <img
          className="navbar-logo"
          src={logoLink}
          alt="Link-logo"
          onClick={() => (window.location.href = "/home")}
        />  */}
          <ModalLoginSign/>
       <div className="d-flex">
       <NavLink className="navbar-button " >  < FontAwesomeIcon  icon={faUser} /></NavLink>
        <NavLink className="navbar-button"> <FontAwesomeIcon icon={faSignOutAlt}/></NavLink>
        <NavLink className="navbar-button "> <FontAwesomeIcon icon={faBell}/></NavLink>
       </div>

       

       
        {/* <button className="navbar-button">
          <FontAwesomeIcon icon={faUser} title="Settings" 
            onClick={() => (window.location.href = "/settings")} />
        </button> */}
        {/* <button className="navbar-button">
          <FontAwesomeIcon icon={faSignOutAlt} title="Logout" />
        </button> */}
        {/* <button className="navbar-button">
          <FontAwesomeIcon icon={faBell} title="Notifications" />
          <span className="notification-count">3</span>
        </button> */} 
      </nav>
      </>
  
  );
}
