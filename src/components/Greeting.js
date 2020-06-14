import React, { useState, useEffect, useCallback } from "react";
import { useLocalStorage } from "../custome_hooks/useLocalStorage";
import useCurrentTime from "../custome_hooks/useCurrentTime";

const Greeting = () => {
  const time = useCurrentTime();
  const timeInHours = time.getHours();
  const [greeting, setGreeting] = useState("");
  const [name, setName] = useLocalStorage("name", "Ваше имя");


  // Setting the greeting depending on the time of the day
  useEffect(() => {
    switch (true) {
      case timeInHours > 0 && timeInHours <= 5:
        setGreeting("Доброй ночи");
        break;
      case timeInHours > 5 && timeInHours <= 12:
        setGreeting("Доброе утро");
        break;
      case timeInHours > 12 && timeInHours <= 17:
        setGreeting("Добрый день");
        break;
      case timeInHours > 17 && timeInHours <= 24:
        setGreeting("Добрый вечер");
        break;
      default:
        setGreeting("");
    }
  }, [timeInHours]);

 

  // Getting the name of the user
  let handleChange =useCallback( (e) => {
    setName(e.target.value);
  }, [setName]);

  return (
    <div className="greeting_container">
      <h4>{greeting}</h4>
      <input
        type="text"
        size={name.length + 1}
        value={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default Greeting;
