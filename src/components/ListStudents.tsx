import React from "react";

type ListStudentsType = {
    // students: Array<StudentType>;
    students: StudentType[]
}

type StudentType = {
    id: number,
    name: string,
    age: number
}

export const ListStudents = (props: ListStudentsType) => {
    return (
        <ul>
            {props.students.map((obj, index) => {
                debugger
                return (
                    <li key={index}>
                        <span>{obj.name}</span> -
                        <span>{obj.age}</span>
                    </li>
                )
            })}
        </ul>
    )
}