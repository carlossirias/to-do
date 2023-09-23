import { AddForm } from "../add-form"
import { useToDo } from "../../hooks/useToDo"
import {Checkbox} from "@nextui-org/react";

export function AllSection()
{
    const {toDo} = useToDo()


    return(
        <>
            <AddForm/>
            <div className="w-full h-full flex flex-col montserrat gap-[26px] py-3">
                {
                    toDo.map((todo) => {
                        return <Checkbox key={todo.id} radius="sm" size="lg" defaultSelected={todo.done} lineThrough><span className="font-semibold">{todo.title}</span></Checkbox>
                    })
                }
            </div>
        </>
    )
}