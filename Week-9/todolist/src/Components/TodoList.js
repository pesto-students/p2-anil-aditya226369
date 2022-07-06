import React,{useState} from 'react'
import Todoform from './Todoform'
import Todo from './Todo';

function TodoList() {
    const [todos,setTodo] = useState([]);
    const addTodo = todo =>{
        if(!todo.text){
            return;
        }
        const newTodo = [todo,...todos];
        setTodo(newTodo);
    }

    const removeTodo = id =>{
        const removeArr = [...todos].filter(todo=>todo.id!==id);
        setTodo(removeArr);
    }

    const completeTodo = id =>{
        let updatedTodos = todos.map(todo=>{
            if(todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodo(updatedTodos);
    }

  return (
    <div>
        <h1>To Do List</h1>
        <Todoform onSubmit={addTodo}/>
        <Todo todos={todos} completeTodo = {completeTodo} removeTodo = {removeTodo} />
    </div>
  )
}

export default TodoList