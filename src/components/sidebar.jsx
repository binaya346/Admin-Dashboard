import React from "react";
import "./sidebar.scss";
import SidebarItemList from "./sidebarItemList";
import SidebarItemMiniList from "./sidebarItemMiniList";

const Sidebar = (props) => {
  const data = [
    {
      title: "dashboard",
      icon: <ion-icon name="apps"></ion-icon>,
      slug: "dashboard",
    },
    {
      title: "tourists",
      icon: <ion-icon name="layers"></ion-icon>,
      slug: "tourists",
    },
    {
      title: "Landmark",
      icon: <ion-icon name="pie-chart"></ion-icon>,
      slug: "landmark",
    },
  ];
  return (
    <aside
      className={`main-sidebar ${
        props.displaySidebar ? "" : "main-sidebar-mini"
      }`}
    >
      {props.displaySidebar ? (
        <SidebarItemList user={props.user} data={data} />
      ) : (
        <SidebarItemMiniList user={props.user} data={data} />
      )}
    </aside>
  );
};

export default Sidebar;
