import React, { useState } from 'react'
import "../App.css"
function CreateTodo({addTodo}) {

    const [inpVal, setInpVal] = useState('')
    function clearInp() {
        setInpVal("");
    }

    const createTodos = () => {
        if (!inpVal) return;
        const request = {
            id: Math.round(Math.random() * 123456789),
            text: inpVal
        }
        addTodo(request) 
        clearInp()
    }


  return (
    <div className='main-create'>
        <input
            value={inpVal}
            onChange={(e) => setInpVal(e.target.value)}
            type="text" 
            placeholder='Write...'
            maxLength={50}
            className='inp-1' />
        <button onClick={createTodos} className='btn-1'>OK</button>
    </div>
  )
}

export default CreateTodo