import React, { useState } from 'react';
import './App.css';
import Todolist from './todolist';

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const changeHandler = (e) => {
    setTask(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask("");
  }

  const deleteTask = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div id='header'>
      <div id='main'>
        <nav id='nav'>
          <h1>Todo-List</h1>
        </nav>
        <br></br>
        <form onSubmit={submitHandler}>
          <input type='text' id='btn0' name='task'value={task}
            placeholder='Add the text'
            onChange={changeHandler}
          /><br></br><br></br>
          <button id='btn'>Add</button><br></br><br></br>
        </form>
        <Todolist todolist={todos} onDelete={deleteTask} />
      </div>
    </div>
  );
}

export default App;
