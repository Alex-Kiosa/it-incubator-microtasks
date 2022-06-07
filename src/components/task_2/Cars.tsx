import React from "react";
import s from "./Cars.module.css"

type CarsType = {
    topCars: CarType[]
}

type CarType = {
    manufacturer: string,
    model: string
}

export const Cars = (props: CarsType) => {
    return (
        <table className={s.cars}>
            <thead>
                <tr>
                    <th className={`${s.col} ${s.th}`}>Машина</th>
                    <th className={`${s.col} ${s.th}`}>Модель</th>
                </tr>
            </thead>
            <tbody>
            {props.topCars.map((car, index) => {
                return (
                    <tr key={index}>
                        <td className={s.col}>{car.manufacturer}</td>
                        <td className={s.col}>{car.model}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}