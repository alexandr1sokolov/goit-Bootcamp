
import React from 'react';
import ToDo from '../ToDo/ToDo';
import './ToDoList.css'


const ToDoList = ({inputs, editToDo, deleteToDo})=>
  (
    <ul className='list'>
      {inputs.map((el => <ToDo editToDo={editToDo}
                               deleteToDo={deleteToDo}
                               input={el.input}
                               id={el.id}
                               key={el.id}/>))}
    </ul>
  );

export default ToDoList;
