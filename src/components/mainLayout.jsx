import React, { useEffect, useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import withSizes from "react-sizes";
import { getUser } from "./helper/utils";

const MainLayout = (props) => {
  const { children, isMobile } = props;
  const [user, setUser] = useState(null);
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

  useEffect(() => {
    const currentUser = getUser();
    setUser(currentUser);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <Header
        displaySidebar={displaySidebar}
        handleClick={handleToggleClick}
        user={user}
      />
      <Sidebar displaySidebar={displaySidebar} user={user} />
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
