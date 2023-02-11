
import React from "react";

import timeZones from "../time-zones";
type TimerProps = {
    cityOrCountry: string;
}
export const Timer: React.FC<TimerProps> = (props) => {
    const timeZoneIndex: number = timeZones.findIndex(tz => JSON.stringify(tz).includes(props.cityOrCountry))
    const timeZone:string = timeZones[timeZoneIndex]?.name;
    const timeZoneName: string = timeZone ? props.cityOrCountry : "Israel"
    const [time, setTime] = React.useState(new Date());
    function tick() {
        console.log("tick");
        setTime(new Date());
    }
    React.useEffect(()=>{
        const interval = setInterval(tick, 1000);
        return ()=>clearInterval(interval);
    }, [])
    
    return <div>
        <h3 className='logo'>Time in {timeZoneName}</h3>
        <label style={{display: "block",
         textAlign: "center", fontSize: "2em"}}>{time.toLocaleTimeString(undefined,{timeZone})}</label>
    </div>
}