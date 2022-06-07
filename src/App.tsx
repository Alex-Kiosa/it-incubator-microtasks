import React from 'react';
import './App.css';
import {Task_2} from "./components/task_2/Task_2";
import {Task_3} from "./components/task_3/Task_3";
import {Task_5} from "./components/task_5/Task_5";
import {Task_6} from "./components/task_6/Task_6";

function App() {
    return (
        <div className='App'>
            <Task_6 />
            <Task_5 />
            <Task_3 />
            <Task_2 />
        </div>
    );
}

export default App;
