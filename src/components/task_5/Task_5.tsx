import React, {useState} from "react";
import {Banknotes} from "./Banknotes";

export const Task_5 = () => {
    const [money, setMoney] = useState([
        { banknote: 'Dollars', value: 100, number: ' a1234567890' },
        { banknote: 'Dollars', value: 50, number: ' z1234567890' },
        { banknote: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknote: 'Dollars', value: 100, number: ' e1234567890' },
        { banknote: 'Dollars', value: 50, number: ' c1234567890' },
        { banknote: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknote: 'Dollars', value: 50, number: ' x1234567890' },
        { banknote: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    return (
        <div className='task'>
            <Banknotes money={money}/>
        </div>
    )
}