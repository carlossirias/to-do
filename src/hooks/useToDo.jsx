import { useContext } from "react";
import { ToDoConext } from "../context/ToDo";

export function useToDo()
{
    const {toDo, setToDo} = useContext(ToDoConext)

    if(toDo === undefined)
    {
        throw new Error('UseToDo must be used within a ToDoProvider')
    }

    return {toDo, setToDo}
}