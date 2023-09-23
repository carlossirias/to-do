import { useToDo } from "../hooks/useToDo";

export function AddForm()
{
    const {toDo, setToDo, toDoIdCounter} =  useToDo()
    const addToDo = (event) => {
        event.preventDefault()

        const fields = Object.fromEntries(new window.FormData(event.target))

        const newTodo = [
            {
                id:toDoIdCounter,
                title: fields['todo-name'],
                done: false
            },
            ...toDo
        ]
        setToDo(newTodo)
    }


    return(
        <form action="" className="w-full py-5 flex gap-6" onSubmit={addToDo}>
            <input type="text" name="todo-name" className="outline-none border w-full border-[#BDBDBD] rounded-xl py-4 px-3 focus:ring-blue-50  focus:border-blue-500 dark:focus:ring-blue-50  dark:focus:border-blue-500 block" placeholder="add details"/>
            <button type="submit" className="px-10 py-4 bg-[#2F80ED] rounded-xl text-[14px] font-semibold text-white">Add</button>
        </form>
    )
}