import React, { useState } from 'react'

function Todoform(props) {
    const [input,setInput] = useState();

    const handleChange=e=>{
        setInput(e.target.value);
    }

    const handleSubmit = e=>{
        e.preventDefault();
        if(input===''){
            return;
        }
        props.onSubmit({
            id: Math.random(),
            text: input
        });
        setInput('');
    }
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} placeholder = 'Add a todo' value = {input} name = 'text' className='todo_input' />
        <button className='todo_button'>Add</button>
    </form> 
  )
}

export default Todoform