import React from 'react'
import useCurrentTime from '../custome_hooks/useCurrentTime';

const Time = () => {
    const currentTime = useCurrentTime();
    return ( 
    <div className="time_container">{currentTime.toLocaleTimeString()}</div>
     );
}
 
export default Time;