import React from 'react';
import { useStore } from 'zustand';

const TodoList = () => {
  const todos = useStore((state) => state.todos);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => {
          <li key={todo.id}>{todo.text}</li>
        })}
      </ul>
    </div>
  )
}

export default TodoList