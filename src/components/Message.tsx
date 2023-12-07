import React from 'react'
import { todos } from '../types/type'

type Props = {
    TodosArray: todos[],
    setTodos: React.Dispatch<React.SetStateAction<todos[]>>,
    deleteMessage: (id: number) => void,
    handleEdit: (id: number) => void,
    editMode: boolean,
    editId: number | null,
    handleSave: () => void

}

const Message: React.FC<Props> = ({ TodosArray, deleteMessage, handleEdit, editMode, editId, handleSave }) => {
    return (
        <div>
            <ul>
                {TodosArray.map((todo, i) => (
                    <li key={i}>{todo.id + " " + todo.text} <button onClick={() => deleteMessage(todo.id)}>Delete</button>
                        {editMode && todo.id === editId ? (
                            <button onClick={() => handleSave()}>Save</button>
                        ) : (
                            <button onClick={() => handleEdit(todo.id)}>Edit</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Message