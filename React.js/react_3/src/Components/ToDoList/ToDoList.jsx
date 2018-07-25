import React from 'react';
import FlipMove from 'react-flip-move';
import PropTypes from 'prop-types';
import styles from './ToDoList.css';

const ToDoList =({tasks, deleteItem})=>{
    return (
        <ul className={styles.theList}>
            <FlipMove>
                {
                tasks.map(el=><li key={el.id} className={styles.theList__item} onClick={()=>deleteItem(el.id)}>{el.text}</li>)
            }
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