import { AddForm } from "../add-form"
import { useToDo } from "../../hooks/useToDo"
import {Checkbox} from "@nextui-org/react";

export function AllSection()
{
    const {toDo, setToDo} = useToDo()

    function changeStatus(event)
    {
        const id = event.target.value
        const index = toDo.map(todo => todo.id).findIndex(todo => todo == id)
        const newTodo = toDo
        newTodo[index].done = !newTodo[index].done

        window.localStorage.setItem('todo',  JSON.stringify(newTodo))
        setToDo(newTodo)
    }

    return(
        <>
            <AddForm/>
            <div className="w-full h-full flex flex-col montserrat gap-[26px] py-3">
                {
                    toDo.map((todo) => {
                        return <Checkbox key={todo.id} value={todo.id} onChange={changeStatus} radius="sm" size="lg" defaultSelected={todo.done} lineThrough><span className="font-semibold max-sm:w-fit max-sm:max-w-[20rem] truncate text-ellipsis">{todo.title}</span></Checkbox>
                    })
                }
            </div>
        </>
    )
}