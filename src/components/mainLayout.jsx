import React, { useEffect, useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import withSizes from "react-sizes";

const MainLayout = (props) => {
  const { children, isMobile } = props;
  const [displaySidebar, setDisplaySidebar] = useState(true);
  const handleToggleClick = () => {
    setDisplaySidebar(!displaySidebar);
  };

  useEffect(() => {
    if (isMobile) {
      setDisplaySidebar(false);
    } else {
      setDisplaySidebar(true);
    }
  }, [isMobile]);

  return (
    <div style={{ position: "relative" }}>
      <Header displaySidebar={displaySidebar} handleClick={handleToggleClick} />
      <Sidebar displaySidebar={displaySidebar} />
      <main
        className={`dashboard-content ${displaySidebar ? "" : "mini-sidebar"}`}
      >
        {children}
      </main>
    </div>
  );
};

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 1024,
});

export default withSizes(mapSizesToProps)(MainLayout);
