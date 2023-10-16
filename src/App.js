import './App.css';
import TaskInput from "./TaskInput";
import Task from "./Task";
import {useEffect, useState} from "react";

function App() {
  const [tasks,setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    setTasks(tasks || []);
  }, []);

  function addTask(name) {
    setTasks(prev => {
      return [...prev, {name:name,done:false}];
    });
  }

  function removeTask(indexToRemove) {
    setTasks(prev => {
      return prev.filter((taskObject,index) => index !== indexToRemove);
    });
  }

  function updateTaskDone(taskIndex, newDone) {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }

  return (
    <main>
      <h1>PVL FrontEnd Challenge</h1>
      <TaskInput onAdd={addTask} />
      {tasks.map((task,index) => (
        <Task {...task}
              onTrash={() => removeTask(index)}
              onToggle={done => updateTaskDone(index, done)}
               />
      ))}
    </main>
  );
}

export default App;