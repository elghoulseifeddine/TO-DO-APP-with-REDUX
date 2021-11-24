
import Task from '../Task/Task';
import { useSelector} from 'react-redux';
import React from 'react';


export default function TaskList({test}) {
  const TaskData = useSelector((state) => state.TaskReducer.TaskData);


  return (
    <div className="list">
  {
    test ==='1' ?
    TaskData.map((task,i)=> <Task key={i} task={task} /> ) 
    : test ==='2' ?
    TaskData.filter((task) => task.isDone == true).map((task,i)=> <Task key={i} task={task} /> )
    : TaskData.filter((task) => task.isDone == false).map((task,i)=> <Task key={i} task={task} /> )
  }   
    </div>
  );
}

