import React, {useState} from 'react';
import './App.css';
import {Banknotes} from "./components/Banknotes";
import {ButtonComponent} from "./components/ButtonComponent";

function App() {
    // Task # 5. Filter()
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

    // Task #3. ButtonComponent
    const callBackButton1 = (name: string, age: number, job: string) => {
        console.log(`My name is ${name}. I am ${age} years old. I want to receive an offer for the potion of ${job}.`)
    }

    const callBackButton2 = () => {
        console.log('I am stupid button')
    }

    return (
        <div className='App'>
            <ButtonComponent name={'My button #1'} callback={()=> callBackButton1('Alex', 33, 'react developer')} />
            <ButtonComponent name={'Stupid button'} callback={callBackButton2}/>
            <Banknotes money={money} />
        </div>
    );
}

export default App;
