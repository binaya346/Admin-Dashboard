import React, { useEffect, useState } from "react";
import "./header.scss";
import { logout } from "./helper/utils";
import { withRouter } from "react-router-dom";

const Header = (props) => {
  const handleLogout = () => {
    const response = logout();
    if (response) {
      props.history.push("/admin");
    }
  };

  return (
    <header className="main-header">
      <a className={`logo ${props.displaySidebar ? "" : "logo-mini"}`} href="/">
        <span
          className="logo-lg"
          style={{ display: props.displaySidebar ? "block" : "none" }}
        >
          Dashboard
        </span>
        <span
          className="logo-sm"
          style={{ display: props.displaySidebar ? "none" : "block" }}
        >
          AD
        </span>
      </a>
      <nav
        className={`navbar ${props.displaySidebar ? "" : "full-width-navbar"}`}
      >
        <div className="sidebar-toggle" onClick={props.handleClick}>
          <ion-icon name="menu"></ion-icon>
        </div>
        <div className="navbar-menu">
          <div className="navbar-item">
            <ion-icon name="mail-outline"></ion-icon>
            <div className="navbar-item-count">4</div>
          </div>
          <div className="navbar-item">
            <ion-icon name="flag-outline"></ion-icon>
            <div className="navbar-item-count">10</div>
          </div>
          <div className="navbar-item">
            <ion-icon name="notifications-outline"></ion-icon>
            <div className="navbar-item-count">9</div>
          </div>
          <div className="navbar-item">
            <div className="user-menu">
              <div className="user-avatar">
                <img src="images/user.jpeg" alt="user" />
              </div>
              <div className="user-name">{props.user?.email}</div>
            </div>
          </div>
          <div className="navbar-item" onClick={handleLogout}>
            <ion-icon name="log-out"></ion-icon>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default withRouter(Header);
