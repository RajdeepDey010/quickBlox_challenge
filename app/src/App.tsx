// src/App.tsx
import React, { useState} from 'react';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [messages, setMessages] = useState<string[]>([]);


  const addTodo = (todo: string) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const sendMessage = (message: string) => {
    // Use QuickBlox to send a message
    // Replace with actual message sending logic
    setMessages([...messages, message]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="text-center text-blue-500">Hello, Tailwind CSS!</div>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />

      
    </div>
  );
};

export default App;