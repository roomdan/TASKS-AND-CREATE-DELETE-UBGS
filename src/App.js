import { useEffect, useState } from 'react';
import './App.css';
import CreateNew from './create-new';
import TaskComposition from './Tasks-Comp';

function App() {
  
  const [add, setAdd] = useState(false); const [count, setCount] = useState(0);
  const [E, setE] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div className='App-header-filter-bcg'>
        <div  className='Content-ejecutable'>
          <div className='General-box'>
            <div className='headder-box'>
              <div className='title-ask-content'>
                <h1>MANAGE YOUR TASKS</h1>
              </div>
              <div className='new-task-content'>
                <button className='button-new-task-general' type='button' onClick={()=>{setAdd(true)}}>+</button>
                <div className='notifications'>{count}</div>
              </div>
                <CreateNew act={(e)=>{setE(e)}} view={add} changeView={e=>{setAdd(e)}}/>
            </div>
            <div className='body-box'>
              <TaskComposition global={E} length={(c)=>{setCount(c)}}/>
            </div>
          </div>
        </div>
        <div className='App-back-design'>
          <div className='top-back-style'>
            <div className='alpha'></div>
          </div>
          <div className='bottom-back-style'>
            <div className='delta'></div>
          </div>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
