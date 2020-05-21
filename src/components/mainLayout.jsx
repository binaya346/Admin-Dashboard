import React, { useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";

const MainLayout = (props) => {
  const [displaySidebar, setDisplaySidebar] = useState(true);
  const handleToggleClick = () => {
    setDisplaySidebar(!displaySidebar);
  };
  return (
    <div style={{ position: "relative" }}>
      <Header displaySidebar={displaySidebar} handleClick={handleToggleClick} />
      <Sidebar displaySidebar={displaySidebar} />
    </div>
  );
};

export default MainLayout;
