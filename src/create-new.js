import { useEffect, useState } from "react"
import { Edit } from "./acces-CRD-https";

const CreateNew = ({view, changeView, act})=>{

    const [styleClass, setStyleClass] = useState('New-task-window');
    const [student, setStudent] = useState('');
    const [task, setTask] = useState('');
    const [actually, setActually] = useState(0)

    useEffect(
        ()=>{
            if(view) {
                setStyleClass('New-task-window-view');
            }
        },[view]
    )

    useEffect(
        ()=>{
            act(actually)
        },[actually, act]
    )

    const Put = (New, user)=>{
        if(task) {
            return {
                student: New,
                task: user,  
            }
        }
        }

    const closeWindow = ()=>{
        setStyleClass('New-task-window');
        changeView(false)
    }

    const putData = ()=>{
        setActually(actually+1);
        Edit(Put(student, task));
        const last = ()=>{
                setStudent(''); 
                setTask('');
                closeWindow();
        }
        last();
    }

    return (
        <div className={styleClass}>
            <div className='headder-box-2'>
                <button className='Button-Close-text' type='button' onClick={closeWindow}>Close</button>
            </div>
            <div className='post-content'>
                <input value={student} onChange={e=>{setStudent(e.target.value)}} placeholder='Your Name' className='task-in3' />
                <input value={task} onChange={e=>{setTask(e.target.value)}} placeholder='New Task' className='task-in3' />
                <button onClick={putData} className='Button-Close-text-2'>Add Task</button>
            </div>
        </div>
    )
}

export default CreateNew