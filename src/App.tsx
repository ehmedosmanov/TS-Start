import { useState } from 'react'
import './App.css'
import Message from './components/Message'
import TodoInput from './components/TodoInput'
import { todos } from './types/type'

const App:React.FC = () =>   {

  const [todo,setTodo ] = useState<string>('')
  const [todosArray,setTodos] = useState<todos[]>([])
  const [editMode, setEditMode] = useState<boolean>(false)
  const [editId, setEditId] = useState<number | null>(null)
  
  const addMessage = () => {
    if(todo) {
      setTodos([...todosArray, {text:todo,id:todosArray.length+1}])
    }
  }

  const deleteMessage = (id:number) => {
    setTodos(todosArray.filter((todo)=>todo.id!==id))
  }

  const handleEdit = (id: number) => {
    setEditMode(true) 
    setEditId(id)
    const editedTodo = todosArray.find(x => x.id === id)
     if(editedTodo) {
       setTodo(editedTodo.text)
     }
    
  }

  const handleSave = () => {
    const findTodo = todosArray.find(x => x.id === editId)
    console.log(findTodo);
    
    if(findTodo) {
      findTodo.text = todo
    }
    setEditMode(false)
  }
  
  return (
    <div className="App">
      <TodoInput addMessage={addMessage} todo={todo} setTodo={setTodo}/>
      <Message handleEdit={handleEdit} editMode={editMode} editId={editId} handleSave={handleSave} deleteMessage={deleteMessage} TodosArray={todosArray} setTodos={setTodos}/>
    </div>
  )
}

export default App
