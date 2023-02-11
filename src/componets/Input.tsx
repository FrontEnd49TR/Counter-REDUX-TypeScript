import { type } from "os";
import React, { useEffect } from "react";
type InputProps = {
    inputId: string;
    inputProcess: (value: string) => string
}
export const Input: React.FC<InputProps> = 
({inputId, inputProcess}) => {

    // the result will be undefined
    // const inputElement: HTMLInputElement | null = document.getElementById("1") as HTMLInputElement;
    // function processGo(): void {
    //     console.log(inputElement?.value)
    // }
    // we have to use useEffect

    let inputElement: HTMLInputElement | null

    function processGo(): void {
       console.log(`Input component prints out what the function inputProcess has returned ${inputProcess(inputElement!.value)}`)
        inputElement!.value = '';
    }
    useEffect(() => {
        inputElement = document.getElementById(inputId) as HTMLInputElement;
    })
    return <div>
        <input id={inputId} />
        <button onClick={processGo}>GO</button>
    </div>
}