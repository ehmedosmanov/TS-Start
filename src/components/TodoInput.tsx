import React from 'react'

type Props = {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    addMessage: () => void
}

const TodoInput: React.FC<Props> = ({ todo, setTodo, addMessage }) => {
    return (
        <div>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button onClick={addMessage}>Add Todo</button>
        </div>

    )
}

export default TodoInput