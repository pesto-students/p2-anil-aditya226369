import React,{useState} from 'react'
import Todoform from './Todoform'
import TodoList from './TodoList';

function AddTodo() {
    const [todos,setTodo] = useState([]); // used state here to get todo list state
    const addTodo = todo =>{ // this function add todo into the updated state
        if(!todo.text){
            return;
        }
        const newTodo = [todo,...todos];
        setTodo(newTodo);
    }

    const removeTodo = id =>{ // this function removes a particular todo from list
        const removeArr = [...todos].filter(todo=>todo.id!==id);
        
        setTodo(removeArr);
    }

    const checkedTodo = id =>{ // this function change the pending state to complete by just toggle
        let updatedTodos = todos.map(todo=>{
            if(todo.id === id){
                todo.flag = !todo.flag;
            }
            return todo;
        });
        setTodo(updatedTodos);
    }

  return (
    <div>
        <h1>To Do List</h1>
        <Todoform onSubmit={addTodo}/>
        <TodoList todos={todos} checkedTodo = {checkedTodo} removeTodo = {removeTodo} />
    </div>
  )
}

export default AddTodo;