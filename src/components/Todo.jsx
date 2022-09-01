import React, { useState } from 'react'
import './Todo.css'

const Todo = () => {
    const [inputData, setInputData] = useState('')
    const [todos, setTodos] = useState([
        'Walk for fresh.',
        'Rest a while.',
        'Feed a dog.',
        'Watch a movie.'
    ])

    console.log(inputData);

    // Arrow function can also be used
    // const handleSubmit = ()=> {}
    
    function handleSubmit(){
        setTodos([...todos, inputData])
        setInputData('')
    }


    return (
        <div className='todo'>
            <div className="todo-logo">
                <h3>Todo App</h3>
            </div>

            <div className="todo-form">
                <input
                    type="text"
                    className="input"
                    placeholder='Add items'
                    value={inputData}
                    onChange = {(e) => setInputData(e.target.value)}
                />
                <input
                    type="button"
                    className="button"
                    value="Add Todo"
                    disabled={!inputData}
                    onClick={handleSubmit}
                />
            </div>

            <div className="todo-lists">
                <h3>Task Lists</h3>
                <ul>
                    {
                        todos.map((todo) => (
                            <li>{todo}</li>
                        ))
                    }
                </ul>
            </div>

            <input type="button" className='todo-removeall' value="Remove All" />
        </div>
    )
}

export default Todo