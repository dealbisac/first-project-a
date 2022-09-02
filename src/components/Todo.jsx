import React, { useState, useEffect } from 'react'
import './Todo.css'

const Todo = () => {
    const [inputData, setInputData] = useState('')
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('lists')) || []);

    console.log(inputData);

    //use effect to set the todos array to local storage
    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(todos));
      }, [todos]);

    // use effect to fetch data from local storage
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('lists'));
        if (data) {
            setTodos(data);
        }
    } , [])

    // Create: Add new items(tasks) to the existing todo array.
    // Arrow function can also be used
    // const handleSubmit = ()=> {}
    function handleSubmit() {
        setTodos([...todos, inputData])
        setInputData('')
    }

    // Remove: remove all data at once.
    function removeAll() {
        setTodos([]);
    }

    //Delete: delete the individual todo list
    function deleteTodo(index) {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    // Update: update the individual todo list
    function updateTodo(index) {
        const newTodos = [...todos]
        newTodos.splice(index, 1, inputData)
        setTodos(newTodos)
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
                    onChange={(e) => setInputData(e.target.value)}
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

                    {todos.map((todo, index) => (
                        <li key={index}>
                            <span>{todo}</span>
                            <input
                                type="button"
                                className="update"
                                value="Update"
                                onClick={() => updateTodo(index)}
                            />
                            <input
                                type="button"
                                className="delete"
                                value="Delete"
                                onClick={() => deleteTodo(index)}
                            />  
                        </li>
                    ))}
                </ul>
            </div>

            <input
                type="button"
                className='todo-removeall'
                value="Remove All"
                onClick={removeAll}
            />
        </div>
    )
}

export default Todo