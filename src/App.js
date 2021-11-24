

import './App.css';
import NavBar from './components/Navbar/NavBar';
import TaskList from './components/TaskList/TaskList';
import {useState} from 'react';
import {useSelector} from 'react-redux'
import EmptyTask from './components/EmptyTask/EmptyTask';

function App() {
  const TaskData = useSelector((state) => state.TaskReducer.TaskData);
  const [test,setTest] = useState('1')
  return (
    <div className="App">
      <NavBar setTest={setTest} />
      {TaskData.length===0? <EmptyTask />  :
        <TaskList test= {test} />}
    </div>
  );
}

export default App;
