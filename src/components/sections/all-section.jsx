import { AddForm } from "../add-form"
import { useToDo } from "../../hooks/useToDo"

export function AllSection()
{
    const {toDo} = useToDo()

    return(
        <>
            <AddForm/>
            <div className="w-full h-full flex flex-col montserrat gap-[26px] py-3">
                {
                    toDo.map((todo) => {
                        return <div className="flex gap-2" key={todo.id} id={todo.id}>
                            <input type="checkbox" className="w-6 h-6" checked={todo.done}></input>
                            <span className={`montserrat font-semibold ${todo.done ? 'done' : ''}`}>{todo.title}</span>
                        </div>
                    })
                }
            </div>
        </>
    )
}