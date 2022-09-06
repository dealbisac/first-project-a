import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import ListItemText from '@mui/material/ListItemText';
import Modal from '@mui/material/Modal';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

import db from '.././firebasefile';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
      setOpen(true);
  }

  const handleClose = () => {
      setOpen(false);
  }

  const updateTodo = () => {
    //Update the todo field with new text
    //EDIT / UPDATE
    db.collection('todos').doc(props.todo.id).set({
      todo: input
    }, { merge: true });
  }

  return (
    <li>
      <ListItemText primary={props.todo.todo} secondary="Mark as Done" />
      <Button
        variant="contained"
        color="primary"
        startIcon={<EditIcon />}
        onClick={handleOpen}
      >Edit</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Edit the Todos</h2>
          <p id="simple-modal-description">
            <FormControl>
              <InputLabel>{props.todo.todo}</InputLabel>
              <Input value={input} onChange={event => setInput(event.target.value)} />
            </FormControl>
            <Button onClick={updateTodo}>Update Todo</Button>
          </p>
        </div>
      </Modal>

      <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={event => db.collection('todos').doc(props.todo.id).delete()}

      >Delete</Button>
    </li>
  )
}

export default Todo