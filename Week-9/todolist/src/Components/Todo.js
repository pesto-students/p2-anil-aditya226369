import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";

function Todo({ todos, completeTodo, removeTodo }) {
  
  return todos.map((todo, index) => (
    <div className="todo_row" key={index}>
      <div key={todo.id}>{todo.text}</div>
      <div className="icons">
      <div className={todo.isComplete ? "status_text_complete" : "status_text_pending"} /* this tells wheather the state is pending or completed */ >
        {todo.isComplete ? "Completed" : "Pending"} 
        <input className="checkBox" type="checkbox" onClick={()=>completeTodo(todo.id)} /* this toggles the state between pending or completed */ />
      </div>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)} //removes a particular todo from list
          className="delete_icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
