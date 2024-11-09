import React from "react";
import Todo from "../todo/Todo";
import "./TodoList.modal.scss";

const TodoList = ({ todoList, handleDone, handleDelete }) => {
  return (
    <ul className="ul">
      {todoList.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleDone={handleDone}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
