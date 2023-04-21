import React from "react";
import { useState, useEffect } from "react";

function TodoForm(props) {
  const [firstValue, changedValue] = useState("");

  //it will handle changes in the input box
  const handlechange = (e) => {
    changedValue(e.target.value);
  };

  //to handle the submit
  const handleSubmit = (e) => {
    //it prevents reloading when you submut the form
    e.preventDefault();

    //provinding different ids to each todo

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: firstValue,
    });

    changedValue("");
  };
  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="Add a todo"
          name="text"
          value={firstValue}
          onChange={handlechange}
        />
        <button className="todo-button">Add todo</button>
      </form>
    </div>
  );
}

export default TodoForm;
