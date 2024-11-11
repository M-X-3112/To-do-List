import React, { useState } from 'react'
import { FaCheck, FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { VscDebugBreakpointLog, VscDebugBreakpointLogUnverified } from 'react-icons/vsc';

function Todos({todo,removeTodo,updatingTodo}) {
  const {text, id} = todo;
  const [todoVal, setTodoVal] = useState(false)
  const [updateVal, setUpdateVal] = useState(text)
  
  const updateTodo = () => {
    const request = {
      id: id,
      text: updateVal
    }
    updatingTodo(request);
    setTodoVal(false)
  }

  return (
    <div className='todo'>
      <div className='left-icon'>
      {todoVal ? "" : <VscDebugBreakpointLogUnverified />}
        {
          todoVal ?
          <input
          value={updateVal}
          onChange={(e) => setUpdateVal(e.target.value)}
          type="text" 
          maxLength={50}
          className='inp-edit-1' />
          : text
        }
      </div>
        <div className="icons">
            <MdDelete className='icon1' onClick={()=> removeTodo(id) } />
            {
              todoVal ? <FaCheck className='icon3' onClick={updateTodo} /> : <FaEdit className='icon2' onClick={()=> setTodoVal(true)} />
            }
            

        </div>
    </div>
  )
}

export default Todos