import React, {useState} from "react";
import s from "./Banknotes.module.css";

type BanknotesPropsType = {
    money: Array<BanknoteType>
}

type BanknoteType = {
    banknote: string
    value: number
    number: string
}

type FilteredType = 'all' | 'rubles' | 'dollars'

export const Banknotes = (props: BanknotesPropsType) => {
    let currentMoney;

    const [filtered, setFilter] = useState<FilteredType>('all')

    if (filtered === 'rubles') {
        currentMoney = props.money.filter((el) => el.banknote === "RUBLS");
    } else if (filtered === 'dollars') {
        currentMoney = props.money.filter((el) => el.banknote === "Dollars");
    } else {
        currentMoney = props.money;
    }

    const onclickHandlerFiltered = (buttonName: FilteredType) => {
        setFilter(buttonName)
    }

    return (
        <div className={s.wrap}>
            <h2>Task # 5. Filter()</h2>
            <ol>
                {currentMoney.map((el, index) => {
                    return (
                        <li key={index}>
                            <span>{el.banknote} - </span>
                            <span>{el.value} - </span>
                            <span>{el.number}</span>
                        </li>
                    )
                })}
            </ol>
            <div className={s.buttons}>
                <button className={s.buttons__item} onClick={() => onclickHandlerFiltered("all")}>All</button>
                <button className={s.buttons__item} onClick={() => onclickHandlerFiltered("rubles")}>Rubles</button>
                <button className={s.buttons__item} onClick={() => onclickHandlerFiltered("dollars")}>Dollars</button>
            </div>
        </div>
    )
}