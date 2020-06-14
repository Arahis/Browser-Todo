import React, { useState, useContext, useEffect } from "react";
import { useLocalStorage } from "../custome_hooks/useLocalStorage";
import { GreetingContext } from "../contexts/GreetingContext";

const Greeting = () => {
  const time = useContext(GreetingContext);
  const timeInHours = time.hours();
  const [greeting, setGreeting] = useState("ooo");
  const [name, setName] = useLocalStorage("name", "Your name");

  // Setting the greeting depending on the time of the day
  useEffect(() => {
    switch (true) {
      case timeInHours > 0 && timeInHours < 5:
        setGreeting("Good night");
        break;
      case timeInHours > 5 && timeInHours < 12:
        setGreeting("Good morning");
        break;
      case timeInHours > 12 && timeInHours < 17:
        setGreeting("Good day");
        break;
      case timeInHours > 17 && timeInHours < 24:
        setGreeting("Good evening");
        break;
      default:
        setGreeting("");
    }
  }, [timeInHours]);

  console.log(timeInHours);

  // Getting the name of the user
  let handleChange = (e) => {
    setName(e.target.value);
  };

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
