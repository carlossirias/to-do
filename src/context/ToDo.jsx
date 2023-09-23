import { createContext } from "react";
import { useState } from "react";

 export const ToDoConext = createContext()

 // eslint-disable-next-line react/prop-types
 export function ToDoProvider({children})
 {
    const [toDo, setToDo] = useState([{
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
        id : 3,
        title:"🎮. Play some games.",
        done:false
    },
    {
        id:4,
        title:'🔥. Watch a movie',
        done:true
    },
    {
        id:5,
        title:'💻. Work on the project',
        done:false
    }
    ])

    const [toDoIdCounter, setToDoIdCounter] = useState(toDo.length);
    console.log(toDo)
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