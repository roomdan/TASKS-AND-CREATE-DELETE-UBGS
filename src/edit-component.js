import { useEffect, useState } from "react"

const TaskAndEdit = ({button, task, newTask})=>{

    const [hom, setHom] = useState(task)

    useEffect(
        ()=>{
            newTask(hom);
        },[hom, newTask]
    )

    if (button) {
        return (
            <div>
                <div>
                    <input className='task-in'  value={hom} onChange={v=>{setHom(v.target.value)}}/>
                </div>
                <p className='comment'>*Change the task description and press update*</p>
            </div>
        )
    }
    else {
        return (
            <div>
                <div className='task-in1'>{task}</div>
            </div>
        )
    }
}

export default TaskAndEdit