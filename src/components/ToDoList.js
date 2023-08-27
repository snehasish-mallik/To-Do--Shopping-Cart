import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import {Link} from 'react-router-dom'
import "../index.css"


const TodoList = () => {
  const { todoList, setTodoList } = useAppContext();
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTodoList([...todoList, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask('');
  };

  const toggleCompletion = (taskId) => {
    setTodoList(todoList.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const removeTask = (taskId) => {
    setTodoList(todoList.filter(task => task.id !== taskId));
  };

  return (
    <div>
        <Link to='/'>HomePage</Link>
      <h2>To-Do List</h2>
      <p className='intro'>
      Introducing our To-Do List Feature!

      Welcome to the efficiency hub of [Your Website Name]. Our To-Do List feature is designed to empower you with streamlined task 
      management, helping you stay organized, focused, and in control of your daily activities. Whether you're a professional, 
      a student, or simply someone with a busy schedule, our To-Do List feature is here to enhance your productivity.
      </p>
      <input
        className='input-form'
        type="text"
        placeholder="Add a new task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask} className='task-button'>Add Task</button>
      <ul>
        {todoList.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompletion(task.id)}
            />
            <span className={task.completed ? 'completed' : ''}>{task.text}</span>
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total tasks: {todoList.length}</p>
      <p>Completed tasks: {todoList.filter(task => task.completed).length}</p>
    </div>
  );
};

export default TodoList;
