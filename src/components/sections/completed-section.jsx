import { useToDo } from "../../hooks/useToDo"
import {Checkbox} from "@nextui-org/react";
import { DeleteSingleButton } from "../delete-single";
import { useEffect, useState } from "react";
import { DeleteAllButton } from "../delete-all";
import { EmptySection } from "../empty-section";


export function CompletedSection()
{
    const {toDo, setToDo} = useToDo()
    const [activeItems, setActiveItems] = useState(toDo.filter((todo) => { return todo.done}))
    const hasActiveItems = activeItems.length > 0
    
    function filterItems(newTodo){ return newTodo.filter((todo) => { return todo.done})}

    useEffect(()=>{
        setActiveItems(filterItems(toDo))
    },[toDo])

    function changeStatus(event)
    {
        const id = event.target.value
        const index = toDo.map(todo => todo.id).findIndex(todo => todo == id)
        const newTodo = toDo
        newTodo[index].done = !newTodo[index].done

        setToDo(newTodo)
        setActiveItems(filterItems(newTodo))
    }


    return(
        <>
            {hasActiveItems ? <div className="w-full h-full flex flex-col montserrat gap-[26px] py-4">
                {
                    activeItems.map((todo) => {
                        return <div key={todo.id} className="flex place-content-between">
                            <Checkbox value={todo.id} onChange={changeStatus} radius="sm" size="lg" defaultSelected={todo.done} lineThrough><span className="font-semibold max-sm:w-fit max-sm:max-w-[16rem] truncate text-ellipsis">{todo.title}</span></Checkbox>
                            <DeleteSingleButton id={todo.id}/>
                        </div> 
                    })
                }
                <div className="flex justify-end w-full">
                    <DeleteAllButton />
                </div>
            </div>
            : <EmptySection message="You haven't completed any tasks yet."/>}
        </>
    )
}