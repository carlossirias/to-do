import { useContext, useEffect } from "react";
import { ToDoConext } from "../context/ToDo";

export function useToDo()
{
    const {toDo, setToDo, toDoIdCounter, setToDoIdCounter} = useContext(ToDoConext)

    if(toDo === undefined)
    {
        throw new Error('UseToDo must be used within a ToDoProvider')
    }

    useEffect(()=>
    {
        setToDoIdCounter(toDoIdCounter + 1)
    },[toDo])

    return {toDo, setToDo, toDoIdCounter, setToDoIdCounter}
}