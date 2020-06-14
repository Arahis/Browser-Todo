import React, {useContext} from 'react'
import { GreetingContext } from "../contexts/GreetingContext";

const Time = () => {
    const currentTime = useContext(GreetingContext);
    return ( 
    <div className="time_container">{currentTime.format("HH:mm:ss")}</div>
     );
}
 
export default Time;