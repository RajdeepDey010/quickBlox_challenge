// src/components/TodoList.tsx
import React from 'react';

interface TodoListProps {
  todos: string[];
  removeTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo }) => (
  <ul>
    {todos.map((todo, index) => (
      <li key={index}>
        {todo} <button onClick={() => removeTodo(index)}>Remove</button>
      </li>
    ))}
  </ul>
);

export default TodoList;