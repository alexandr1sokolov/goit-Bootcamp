import React from 'react';
import FlipMove from 'react-flip-move';
import PropTypes from 'prop-types';
import styles from './ToDoList.css';
import ToDo from '../ToDo/ToDo';

const ToDoList =({tasks, deleteItem, update})=>{
    return (
        <ul className={styles.theList}>
            <FlipMove>
                {/* // tasks.map(el=><li key={el.id} className={styles.theList__item} onClick={()=>deleteItem(el.id)}>{el.text}</li>) */}
                {tasks.map(el=><ToDo text={el.text} id={el.id} key={el.id} deleteItem={deleteItem} update={update}/>)}
            </FlipMove>
        </ul>
    )
};

ToDoList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })
    )
};

export default ToDoList;