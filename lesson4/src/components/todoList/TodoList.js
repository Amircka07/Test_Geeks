import React, { useState } from "react";
import Todo from "../todo/Todo";
import className from "./TodoList.modal.scss";

const TodoList = ({ todoList, handleDone, handleDelete, handleEdit }) => {
  const [currentId, setCurrentId] = useState(null);
  console.log(currentId, "currentId");
  return (
    <ul className="ul">
      {todoList.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleDone={handleDone}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          setCurrentId={setCurrentId}
          isEdit={currentId === todo.id}
        />
      ))}
    </ul>
  );
};

export default TodoList;
