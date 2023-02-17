
import React from "react";

import timeZones from "../time-zones";
import { Input } from "./Input";
type TimerProps = {
    cityOrCountry: string;
}
export const Timer: React.FC<TimerProps> = (props) => {
    const timeZoneIndex: number =
     timeZones.findIndex(tz => JSON.stringify(tz).includes(props.cityOrCountry));
    const [timeZone, setTimeZone] = React.useState(timeZones[timeZoneIndex]?.name);
    // with UseState
    //const [timeZoneName, setTimeZoneName] = React.useState(timeZone ?
    //     props.cityOrCountry : "Israel");

    // with useRef
    const timeZoneName = React.useRef(timeZone ?
            props.cityOrCountry : "Israel");

    const [time, setTime] = React.useState(new Date());
    function tick() {
        console.log("tick");
        setTime(new Date());
    }
    React.useEffect(()=>{
        const interval = setInterval(tick, 1000);
        return ()=>clearInterval(interval);
    }, [])
    
    function processCityCountry(value: string): string {
        const index =  timeZones.findIndex(tz => JSON.stringify(tz).includes(value));
        let res = '';
        if (index < 0) {
            res = `${value} is wrong city / country, please type again`;
        } else {
            // with useState
         //   setTimeZoneName(value);

         // with useRef
         timeZoneName.current = value;
            setTimeZone(timeZones[index].name);
        }
        return res;
    }
  // .current for useRef
    return <div>
        <Input placeHolder={"Enter city or country"} inputProcess={processCityCountry}/>
     
        <h3 className='logo'>Time in {timeZoneName.current}</h3>
        <label style={{display: "block",
         textAlign: "center", fontSize: "2em"}}>
            {time.toLocaleTimeString(undefined,{timeZone})}</label>
    </div>
}