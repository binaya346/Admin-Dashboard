import React from "react";
import "./header.scss";

const Header = (props) => {
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
              <div className="user-name">Binaya Rijal</div>
            </div>
          </div>
          <div className="navbar-item">
            <ion-icon name="construct"></ion-icon>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
