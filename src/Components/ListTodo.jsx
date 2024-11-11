import React from 'react'
import Todos from './Todos'

function ListTodo({todos, removeTodo,updatingTodo}) {
  return (
    <div className='main-list'>
      {
        todos && todos.map(item => (
          <Todos key={item.id} todo={item} removeTodo={removeTodo} updatingTodo={updatingTodo} />
        ))
      }
    </div>
  )
}

export default ListTodo