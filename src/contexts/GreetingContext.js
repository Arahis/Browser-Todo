import React, { createContext, useState, useEffect } from "react";
import moment from "moment";

export const GreetingContext = createContext();

const getTime = () => {
  return moment();
};

const GreetingContextProvider = (props) => {
    
  const [currentTime, setCurrentTime] = useState(getTime());


  const setTime = () => {
    setInterval(() => {
      setCurrentTime(getTime());
    }, 1000);

    return () => {
      clearInterval(setTime());
    };
  };

  useEffect(setTime(), []);

  return (
    <GreetingContext.Provider value={currentTime}>
      {props.children}
    </GreetingContext.Provider>
  );
};

export default GreetingContextProvider;
