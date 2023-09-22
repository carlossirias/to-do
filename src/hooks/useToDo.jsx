import { useContext } from "react";
import { ToDoConext } from "../context/ToDo";

export function useToDo()
{
    const {toDo, setToDo} = useContext(ToDoConext)

    return {toDo, setToDo}
}