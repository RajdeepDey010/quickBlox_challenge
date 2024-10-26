import { MainButton, TypeButton } from 'quickblox-react-ui-kit';
import React, { useState } from 'react';

interface TodoInputProps {
    addTodo: (todo: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
    const [input, setInput] = useState("");

    const handleAddTodo = () => {
        if (input) {
            addTodo(input);
            setInput("");
        }
    };

    return (
        <div className='flex'>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new to-do"
            />
            <MainButton
                typeButton={TypeButton.default}
                title="Add"
                styleBox={{ width: "200px", height: "20px" }}
                clickHandler={handleAddTodo}
            />
        </div>
    );
};

export default TodoInput;