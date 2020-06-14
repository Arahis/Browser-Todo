import {useState, useEffect} from 'react'

const useCurrentTime = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {

        const timeInterval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timeInterval);
          };

    }, [currentTime]);
    return currentTime;
}
 
export default useCurrentTime;