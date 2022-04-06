import React from "react";
import SidebarItemMini from "./sidebarItemMini";
import "./sidebarItemMiniList.scss";

const SidebarItemMiniList = (props) => {
  return (
    <>
      {/* <div className="sidebar-user-panel-mini">
        <img src="images/user.jpeg" alt="user" />
      </div> */}
      {props.data.map((item, i) => (
        <SidebarItemMini key={i} slug={item.slug} icon={item.icon} />
      ))}
    </>
  );
};

export default SidebarItemMiniList;
