import React from 'react'
import './Todo.css'

const Todo = () => {
  return (
    <div className='todo'>
        <div className="todo-logo">
            <h3>Todo App</h3>
        </div>

        <div className="todo-form">
            <input type="text" className="input" placeholder='Add items' />
            <input type="button" className="button" value="Add Todo" />
        </div>

        <div className="todo-lists">
            <h3>Task Lists</h3>
            <ul>
                <li>Walk for fresh.</li>
                <li>Rest a while.</li>
                <li>Feed a dog.</li>
                <li>Watch a movie.</li>
            </ul>
        </div>

        <input type="button" className='todo-removeall' value="Remove All"/>
    </div>
  )
}

export default Todo