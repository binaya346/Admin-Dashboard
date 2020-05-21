import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebarItemMini.scss";

const SidebarItemMini = (props) => {
  return (
    <NavLink to={`/${props.slug}`} activeClassName="active-sidebar" exact>
      <div className="sidebar-item-mini">{props.icon}</div>
    </NavLink>
  );
};

export default SidebarItemMini;
