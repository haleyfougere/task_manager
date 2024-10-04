import React, { useState } from 'react';
import './App.css';

function App() {
  // State to manage tasks
  // useState is a React Hook
  const [tasks, setTasks] = useState([]); // tasks is a state variable, setTasks is a setter function
  const [newTask, setNewTask] = useState(''); // holds text for a new task
  
  // add a new task
  const addTask = () => {
    // trim to check if there is whitespace (or just spaces/empty task)
    if (newTask.trim()) {
      //if not an empty string
      // add a new task to the array of tasks
      setTasks([...tasks, {text: newTask, completed: false}]);
      // reset the input field
      setNewTask('');
    } else {
      // If the input is blank, show a pop-up alert
      alert('You cannot enter a blank task! Please enter a task.');
    }
  };

  // toggle the task completion field
  const toggleTaskCompletion = (index) => {
    // code to get the specific task to toggle completion true and false
    const updatedTasks = tasks.map((task, i) => 
      i === index ? {...task, completed: !task.completed } : task

    );
    setTasks(updatedTasks);
  };

    // Delete a task
    const deleteTask = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    };
  
  return (
    <div className='App-header'>
      <h1>Task Manager</h1>
      {/* add task input text and button */}
      <div className='task-input'>
        <input 
          type='text'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder='Enter new task'
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='task-grid'>
      {tasks.map((task, index) => (
          <div key={index} className={task.completed ? 'completed' : ''}>
            <span onClick={() => toggleTaskCompletion(index)} className='task-text'>
              {task.text}
            </span>
            <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
