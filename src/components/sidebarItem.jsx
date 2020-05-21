import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./sidebarItem.scss";

const SidebarItem = (props) => {
  const [displayDeeper, setDisplayDeeper] = useState(false);
  const handleClick = () => {
    setDisplayDeeper(!displayDeeper);
  };
  return (
    <NavLink
      to={`/${props.slug}`}
      activeClassName="active-sidebar"
      exact
      onClick={handleClick}
    >
      <div className="sidebar-item">
        {props.icon}
        <div className="sidebar-item-title">{props.title}</div>
      </div>
      <div className={`sidebar-item-icon ${displayDeeper ? "below" : ""}`}>
        &lsaquo;
      </div>
    </NavLink>
  );
};

export default SidebarItem;
