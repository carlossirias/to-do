import { createContext } from "react";
import { useState } from "react";

 export const ToDoConext = createContext()

 // eslint-disable-next-line react/prop-types
 export function ToDoProvider({children})
 {
    const [toDo, setToDo] = useState([{
        id:1,
        title:'🌱. Finish this challenge.',
        done: true
    },
    {
        id:2,
        title:'⚡️. Improve my english.',
        done: false
    }])

    const [toDoIdCounter, setToDoIdCounter] = useState(3);
    return(
        <ToDoConext.Provider value={
            {
                toDo,
                toDoIdCounter,
                setToDoIdCounter,
                setToDo
            }
        }>
            {children}
        </ToDoConext.Provider>
    )
 }