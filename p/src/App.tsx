import React, { useState } from 'react';
import './App.css';
import Todo from './components/todoList';


interface todoType {
  text:string;
  done: boolean
}

function App() {
  

  


  return (
    <div className="App">
      <div className="Heading-Wrapper">
        <h1>To Do List </h1>
        <span>made by minseo</span>
        <input type = "text"></input>
        <button> Add todo</button>
      </div>
      <div>
        
      {todoList.map((todo,i)=><Todo number={i+1} text={todo.text} done={todo.done} ></Todo>)}

      </div>
    </div>
  );
}

export default App;
