import { useEffect, useState } from "react"
import {AccesData, Delete, Edit} from "./acces-CRD-https"
import LoadingComponent from "./loading-component";
import TaskListRender from "./task-list-render";

const TaskComposition = ({global})=>{

    const [tasks, setTasks] = useState(null);
    const [actually, SetActualy] = useState(0);

    useEffect(
        ()=>{
            const acces =async()=>{
                const get = await AccesData();
                setTasks(get.data.todos)
                SetActualy(true)
            }
            acces();
        }, [actually, global]
    )

const Put = (New, user)=>{
if(tasks) {
    return {
        task: New,
        student: user,
    }
}
}

const renList = tasks?tasks.map(
    (task, index)=>{
            return <TaskListRender 
            tasks={tasks?task.task:''} index={tasks?index:''} student={tasks?task.student:''} key={tasks?task.id:''}
            NewTask={e=>{Edit(Put(e, task.student))}} DeleteTask={()=>{Delete(task.id); SetActualy(actually+1)}}/>
    }
):<LoadingComponent/>
    return (
        <div className='render-task-component'>
            {renList}
        </div>
    )
}

export default TaskComposition