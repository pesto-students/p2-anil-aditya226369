import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";

function Todo({ todos, completeTodo, removeTodo }) {
  return todos.map((todo, index) => (
    <div className="todo_row" key={index}>
      <div key={todo.id}>{todo.text}</div>
      
      <div className="icons">
      <div
        className={
          todo.isComplete ? "status_text_complete" : "status_text_pending"
        }
        onClick={() => completeTodo(todo.id)}
      >
        {todo.isComplete ? "Completed" : "Pending"}
      </div>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete_icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
