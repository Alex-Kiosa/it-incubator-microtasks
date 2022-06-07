import React, {useState} from "react";
import {ButtonComponent} from "./ButtonComponent";

export const Task_3 = () => {
    let [buttonMessage, setButtonMessage] = useState('')

    const callBackButton1 = (name: string, age: number, job: string) => {
        buttonMessage = `My name is ${name}. I am ${age} years old. I want to receive an offer for the potion of ${job}.`
        setButtonMessage(buttonMessage)
    }

    const callBackButton2 = () => {
        buttonMessage = 'I am stupid button'
        setButtonMessage(buttonMessage)
    }
    return (
        <div className='task'>
            <h2>Task #3. Button</h2>
            <ButtonComponent name={'My button #1'} callback={()=> callBackButton1('Alex', 33, 'react developer')} />
            <ButtonComponent name={'Stupid button'} callback={callBackButton2}/>
            <p>{buttonMessage}</p>
        </div>
    )
}