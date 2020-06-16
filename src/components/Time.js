import React, { useContext } from "react";
import useCurrentTime from "../custome_hooks/useCurrentTime";
import { DashboardContext } from "../contexts/DashboardContext";

const Time = () => {
  const { currentTime } = useCurrentTime();
  const { color } = useContext(DashboardContext);
  return (
    <div className="time_container" style={{ color: color }}>
      {currentTime.toLocaleTimeString()}
    </div>
  );
};

export default Time;
