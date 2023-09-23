import { TrashIcon } from "./icons";
import { useToDo } from "../hooks/useToDo"

// eslint-disable-next-line react/prop-types
export function DeleteSingleButton({id})
{
    const {toDo, setToDo} = useToDo()

    function deleteToDo(id)
    {
        const newToDo = toDo.filter((todo) => { return todo.id != id})
        window.localStorage.setItem('todo',  JSON.stringify(newToDo))
        setToDo(newToDo)
    }

    return(
        <button onClick={()=>{deleteToDo(id)}}><TrashIcon></TrashIcon></button>
    )
}