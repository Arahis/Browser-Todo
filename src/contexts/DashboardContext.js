import React, { createContext, useState, useEffect, useMemo, useCallback } from "react";
import useCurrentTime from "../custome_hooks/useCurrentTime";
import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";

export const DashboardContext = createContext();

const DashboardContextProvider = (props) => {
  const { timeInHours } = useCurrentTime();

  const [color, setColor] = useState("");
  const [query, setQuery] = useState("");
  const [greeting, setGreeting] = useState("");

  let handleTimeInHours = useCallback(() => {
    switch (true) {
      case timeInHours >= 0 && timeInHours <= 5:
        setGreeting("Доброй ночи,");
        setColor("white");
        setQuery("night");
        break;
      case timeInHours > 5 && timeInHours <= 12:
        setGreeting("Доброе утро,");
        setColor("black");
        setQuery("morning");
        break;
      case timeInHours > 12 && timeInHours <= 17:
        setGreeting("Добрый день,");
        setColor("black");
        setQuery("noon");
        break;
      case timeInHours > 17 && timeInHours <= 24:
        setGreeting("Добрый вечер,");
        setColor("white");
        setQuery("evening");
        break;
      default:
        setGreeting("Добрый вечер,");
        setColor("white");
        setQuery("evening");
    }
  }, [timeInHours])

  useEffect(() => {
    handleTimeInHours()
  }, [handleTimeInHours]);

  const result = useMemo(
    () => ({
      color,
      greeting,
      query
    }),
    [color, greeting, query]
  );

  console.log("QUERY DashContext", result)

  return (
    <DashboardContext.Provider value={result}>
      {props.children}
    </DashboardContext.Provider>
  );
};

export default DashboardContextProvider;
