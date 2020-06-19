import { useState, useEffect, useMemo } from "react";

const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const timeInHours = currentTime.getHours();

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, [currentTime]);

  const result = useMemo(
    () => ({
      currentTime,
      timeInHours,
    }),
    [currentTime, timeInHours]
  );

  return result;
};

export default useCurrentTime;
