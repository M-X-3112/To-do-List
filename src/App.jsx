import { useState } from 'react'
import './App.css'
import CreateTodo from './Components/CreateTodo'
import ListTodo from './Components/ListTodo'


function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (newValue) => {
    setTodos([...todos,newValue])
  }

  const removeTodo = (id) => {
    const afterTodos = todos.filter(item => (item.id !== id))
    setTodos([...afterTodos])
  }

  const updatingTodo = (newValue) => {
    const afterUpdate = todos.map(item => {
      if(item.id !== newValue.id) {
        return item
      }
      else {return newValue}
       
    }

  )
    setTodos([...afterUpdate])
  }


  console.log(todos);
  

  return (
    <div className='main'>
      <CreateTodo addTodo={addTodo} />
      <ListTodo todos={todos} removeTodo={removeTodo} updatingTodo={updatingTodo} />
    </div>
  )
}

export default App
