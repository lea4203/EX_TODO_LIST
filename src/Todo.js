// Todo.js

import React from 'react';

const Todo = ({ task, deleteTask }) => {
  return (
    <li>
      {task}
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
};

export default Todo;
