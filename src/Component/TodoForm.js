import React from "react";
import { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [firstValue, changedValue] = useState(
    props.edit ? props.edit.value : ""
  );

  const inputref = useRef(null);

  useEffect(() => {
    inputref.current.focus();
  });

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
        {props.edit ? (
          <>
            <input
              type="text"
              className="todo-input edit"
              placeholder="update your item"
              name="text"
              value={firstValue}
              onChange={handlechange}
              ref={inputref}
            />
            <button className="todo-button  edit">Add todo</button>
          </>
        ) : (
          <>
            <input
              type="text"
              className="todo-input "
              placeholder="Add a todo"
              name="text"
              value={firstValue}
              onChange={handlechange}
              ref={inputref}
            />
            <button className="todo-button">Add todo</button>
          </>
        )}
      </form>
    </div>
  );
}

export default TodoForm;
