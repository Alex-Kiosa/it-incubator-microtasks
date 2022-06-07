import React, {useState} from "react";
import {Input} from "./Input";
import {Button} from "./Button";

export const Task_6 = () => {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'}
        ]
    )

    const [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    const buttonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className='task'>
            <h2>Tsk # 6. Input</h2>
            <Input title={title} setTitle={setTitle}/>
            <Button name='+' callback={buttonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}