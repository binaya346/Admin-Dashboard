import React from "react";
import SidebarItem from "./sidebarItem";
import "./sidebarItemList.scss";

const SidebarItemList = (props) => {
  return (
    <>
      <div className="sidebar-user-panel">
        <div className="user-avatar">
          <img src="images/user.jpeg" alt="user" />
        </div>
        <div className="user-info">
          <div className="user-name">Binaya Rijal</div>
          Online
        </div>
      </div>
      {props.data.map((item, i) => (
        <SidebarItem
          key={i}
          title={item.title}
          icon={item.icon}
          slug={item.slug}
        />
      ))}
    </>
  );
};

export default SidebarItemList;
