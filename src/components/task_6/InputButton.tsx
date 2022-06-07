import React, {ChangeEvent, useState} from "react";

type PropsType = {
    callback: (title: string) => void
}

export const InputButton = (props: PropsType) => {
    let [title, setTitle] = useState('')

    const onchangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onclickButtonHandler = () => {
        props.callback(title)
        setTitle('')
    }

    return (
        <div>
            <input onChange={onchangeInputHandler} value={title} type="text"/>
            <button onClick={onclickButtonHandler}>Click</button>
        </div>
    )
}