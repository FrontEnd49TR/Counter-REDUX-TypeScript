import { error } from "console";
import React from "react";
type AlertProps = {
    type: "warn" | "info" | "error";
    message: string;
}
export const Alert: React.FC<AlertProps> = ({type,message}) => {
    let backGround: "red" | "green" | "yellow"; // type data "red" or "green" or "yellow"
    
    // if (type =="error") {
    //     backGround = "red";
    // } else if (type == "info") {
    //     backGround = "green";
    // } else {
    //     backGround = "yellow";
    // }

    switch(type) {
        case "error": backGround = "red"; break;
        case "info": backGround = "green"; break;
        case "warn": backGround = "yellow";
    }

    return <p style={{backgroundColor: backGround}}>{message}</p>
}