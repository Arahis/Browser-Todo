import React from "react";
import Greeting from "./Greeting";
import Time from "./Time";
import Background from "./Bg";
import DashboardContextProvider from "../contexts/DashboardContext";
import AuthorCopyright from "./Author_copyright";

const Dashboard = () => {
  return (
    <div className="dashboard_container">
      <DashboardContextProvider>
        <div className="dashboard_center">
          <Greeting />
          <Time />
          {/* <Background /> */}
          <AuthorCopyright />
        </div>
      </DashboardContextProvider>
    </div>
  );
};

export default Dashboard;
