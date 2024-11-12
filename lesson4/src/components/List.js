import React from "react";

function List({ list }) {
  return (
    <div>
      {list.map((list) => (
        <li key={list.id}>
          {list.title} - {list.completed}
        </li>
      ))}
    </div>
  );
}
export default List;
