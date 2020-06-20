import React, { useCallback, useContext } from "react";
import { useLocalStorage } from "../custome_hooks/useLocalStorage";
import {DashboardContext} from "../contexts/DashboardContext";


const Greeting = () => {

  const {color, greeting} = useContext(DashboardContext);
  const [name, setName] = useLocalStorage("name", "Введите Ваше имя");


  // Getting the name of the user
  let handleChange =useCallback( (e) => {
    setName(e.target.value);
  }, [setName]);

  return (
    <div className="greeting_container" style={{color: color}}>
      <h4 >{greeting}</h4>
      <input
        type="text"
        size={name.length + 1}
        value={name}
        onChange={handleChange}
        style={{color: color}}
      />
    </div>
  );
};

export default Greeting;
