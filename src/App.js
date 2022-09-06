import React, { useState, } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import SendIcon from '@mui/icons-material/Send';
import db from './firebasefile';
import firebase from 'firebase';

import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault(); // will stop the refresh

     // Write to database (CREATE)
     db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

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
      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}

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
