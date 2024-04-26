import React, { useState } from 'react';
import { useStore } from 'zustand';

//We define a functional component AddTodo that renders a form to add new todos.
const AddTodo = () => {
  const [text, setText] = useState('');
  const addTodo = useStore((state) => state.addTodo);


  //When the form is submitted, we call the addTodo function with the new todo object 
  //containing a unique id, the todo text, and a completed status of false.
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    addTodo({ id: Date.now(), text, completed: false });
    setText('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Add new todo'
      />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default AddTodo