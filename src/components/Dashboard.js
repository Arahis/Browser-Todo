import React from "react";
import Greeting from "./Greeting";
import Time from "./Time";
import GreetingContextProvider from "../contexts/GreetingContext";

const Dashboard = () => {
  return (
    <div className="dashboard_container">
      <GreetingContextProvider>
        <Greeting />
        <Time />
      </GreetingContextProvider>
    </div>
  );
};

export default Dashboard;
