import { createContext } from "react";
import { useState } from "react";

 export const ToDoConext = createContext()

 // eslint-disable-next-line react/prop-types
 export function ToDoProvider({children})
 {
    const toDoInitialState = JSON.parse(window.localStorage.getItem('todo'))
    const [toDo, setToDo] = useState(toDoInitialState || [{
        id:2,
        title:'🌱. Finish this challenge.',
        done: true
    },
    {
        id:1,
        title:'⚡️. Improve my english.',
        done: false
    },
    {
        id:3,
        title:'🔥. Watch a movie',
        done:true
    }
    ])

    const [toDoIdCounter, setToDoIdCounter] = useState(toDo.length);

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