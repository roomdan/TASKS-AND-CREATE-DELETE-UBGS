import { useState } from "react"
import TaskAndEdit from "./edit-component"

const TaskListRender = ({tasks, index, student, NewTask, DeleteTask})=>{

    const [editButton, setEditButton] = useState(null);
    const [NewTaskEdit, setNewTaskEdit] = useState('');
    const [Atask, setAtask] = useState(tasks);

    const UpdateMethods = ()=>{
        NewTask(NewTaskEdit);
        setAtask(NewTaskEdit);
        setEditButton(null);
    }

    return (
        <div className='task-continer'>
            <div className='task-title'>{`TASK: ${index+1}`}</div>
            <div className='task-subtitle'>{`Student: ${student}`}</div>
            <div className='task-text'>
                <button className='Button-Delete-text' onClick={DeleteTask} >Delete</button>
                <TaskAndEdit button={editButton} task={Atask} newTask={ask=>{setNewTaskEdit(ask)}}/>
                <button className='Button-task-text' onClick={()=>{setEditButton(true)}}>Edit</button>
                <button className='Button-Update-text' onClick={UpdateMethods}>Update</button>
            </div>
        </div>
    )
}

export default TaskListRender