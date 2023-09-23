import { useState } from "react"
import { useToDo } from "../hooks/useToDo";



export function ToDoSection()
{
    const [selection, setSelection] = useState('All')
    const {toDo, setToDo} =  useToDo()

    const handleSelection = (event) =>
    {
        setSelection(event.target.value);
    }

    return(
        <section className="w-full h-full max-w-7xl max-sm:px-3 flex justify-center ">
            <article className="w-full max-w-2xl">
                <div className="w-full grid grid-cols-3">
                    <button value={'All'} onClick={handleSelection} className={`p-5 montserrat flex justify-center font-semibold ${selection === 'All'? 'select__button' : ''}`}>All</button>
                    <button value={'Active'} onClick={handleSelection} className={`p-5 montserrat flex justify-center font-semibold ${selection === 'Active'? 'select__button' : ''}`}>Active</button>
                    <button value={'Completed'} onClick={handleSelection} className={`p-5 montserrat flex justify-center font-semibold ${selection === 'Completed'? 'select__button' : ''}`}>Completed</button>
                </div>
                <hr className="h-[1px] bg-[#BDBDB]"/>
            </article>
        </section>
    )
}