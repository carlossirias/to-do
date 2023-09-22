import { createContext } from "react";
import { useState } from "react";

 export const ToDoConext = createContext()

 // eslint-disable-next-line react/prop-types
 export function ToDoProvider({children})
 {
    const [toDo, setToDo] = useState([])
    return(
        <ToDoConext.Provider value={
            {
                toDo,
                setToDo
            }
        }>
            {children}
        </ToDoConext.Provider>
    )
 }