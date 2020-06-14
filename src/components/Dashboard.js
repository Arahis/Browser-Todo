import React from "react";
import Greeting from "./Greeting";
import Time from "./Time";

const Dashboard = () => {
  return (
    <div className="dashboard_container">
        <Greeting />
        <Time />
    </div>
  );
};

export default Dashboard;
