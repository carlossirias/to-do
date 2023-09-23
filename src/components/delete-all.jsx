import { TrashIcon } from "./icons";
import { useToDo } from "../hooks/useToDo"

export function DeleteAllButton()
{
    const {toDo, setToDo} = useToDo()

    function deleteAllToDo()
    {
        const newToDo = toDo.filter((todo) => { return todo.done != true})
        setToDo(newToDo)
    }

    return(
        <button className="flex gap-1 rounded-md bg-[#EB5757] items-center justify-center py-[13px] px-[26px]" onClick={deleteAllToDo}>
            <TrashIcon perimeter="14" color="#fff"></TrashIcon>
            <span className="text-white text-sm font-semibold">Delete all</span>
        </button>
    )
}