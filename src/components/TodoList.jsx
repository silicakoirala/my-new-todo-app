import React from "react";
import todoStore from "../store/todoStore.js";

const TodoList = () => {
  const todos = todoStore((state) => state.todos);

  return (
    <div>
      <h1>Todo List</h1>
      <ul className="list-disc">
        {
          // hami sanga todos chha, ani tyo map garera each todo object lai [<li></li>] element banaune
          todos.map((todo) => {
            // map le each todo object dincha, ani each object lai [<li></li>] element ma convert garne
            return <li key={todo.id}>{todo.text}</li>;
          })
        }
      </ul>
    </div>
  );
};

export default TodoList;
