import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function Todolist() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    //this is the code from stackoverflow...this is use to handle if we type only spaces to the input box than nothing will be added in the list
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    //creating an array of todos
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    // console.log(...todos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };
  return (
    <div>
      <h1>Aaj kuch tufaani karte hai😂</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default Todolist;
