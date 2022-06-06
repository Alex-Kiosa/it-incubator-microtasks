import React from "react";

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
            <button onClick={onClickHandler}>{props.name}</button>
        </>
    )
}