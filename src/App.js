import React, { useState, } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import SendIcon from '@mui/icons-material/Send';



function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault(); // will stop the refresh
    setTodos([...todos, input]);
    setInput(''); // clear up the input after clicking add todo button
  }

  return (
    <div className="App">
      <h1> Let's Build Todo</h1>
      <form>
        <Input
          placeholder="Enter your Todo"
          value={input}
          onChange={event => setInput(event.target.value)}
          className="input"
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={addTodo}
        >
          Add Todo
        </Button>
      </form>


      {/* <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}

      </ul> */}

      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>

      <Button 
      variant="contained"
      className="removeall"
      color="error"
      >
        Remove All
      </Button>
    </div >
  );
}

export default App;
