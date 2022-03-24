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
      title: "layouts options",
      icon: <ion-icon name="pie-chart"></ion-icon>,
      slug: "layouts",
    },
    {
      title: "Ui Elements",
      icon: <ion-icon name="desktop-outline"></ion-icon>,
      slug: "ui-elements",
    },
    {
      title: "calender",
      icon: <ion-icon name="calendar-outline"></ion-icon>,
      slug: "calender",
    },
    {
      title: "mailbox",
      icon: <ion-icon name="mail"></ion-icon>,
      slug: "mailbox",
    },
    {
      title: "miltilevel",
      icon: <ion-icon name="arrow-redo"></ion-icon>,
      slug: "multilevel",
    },
    {
      title: "example",
      icon: <ion-icon name="folder"></ion-icon>,
      slug: "example",
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
