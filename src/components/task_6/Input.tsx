import React, {ChangeEvent, useState} from "react";

type InputPropsType = {
    title: string
    setTitle: (title: string) => void
}

export const Input = (props: InputPropsType) => {
    const onchangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }

    return (
        <input onChange={onchangeInputHandler} type='text' value={props.title}/>
    )
}