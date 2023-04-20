import React, { useState } from "react";
import TodoForm from "./TodoForm";

function Todolist() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    //this is the code from stackoverflow...this is use to handle if we type only spaces to the input box than nothing will be added in the list
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };
  return (
    <div>
      <h1>what's the plan for today?</h1>
      <TodoForm onSubmit={addTodo} />
    </div>
  );
}

export default Todolist;
