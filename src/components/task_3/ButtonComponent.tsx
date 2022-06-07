import React from "react";
import s from "./ButtonComponent.module.css";


type ButtonType = {
    name: string
    callback: () => void
}

export const ButtonComponent = (props: ButtonType) => {
    const onClickHandler = () => {
        props.callback()

    }

    return (
        <>
            <button className={s.button} onClick={onClickHandler}>{props.name}</button>
        </>
    )
}