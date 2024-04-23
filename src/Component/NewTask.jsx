import { useState } from "react";

export default function NewTask({onAdd}) {
 
    const [enteredTask,setEnteredTask] =useState();

    function handleChange(event){
     setEnteredTask(event.target.value);
    }
 
    function handleClick(){
        if(enteredTask.trim() === ''){
            return
        }
setEnteredTask('');
onAdd(enteredTask);
    }

    return(
         <div className="flex items-center gap-4">
        <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" type="text" onChange={handleChange}/>
        <button  onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>
    </div>
    );
}