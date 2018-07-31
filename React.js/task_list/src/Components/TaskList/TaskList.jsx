
import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';
import styles from './TaskList.css'


const TaskList = ({inputs, editTask, deleteTask})=>
  (
    <ul className={styles.list}>
      {inputs.map((el => <Task editTask={editTask}
                               deleteTask={deleteTask}
                               input={el.input}
                               id={el.id}
                               key={el.id}/>))}
    </ul>
  );

TaskList.propTypes = {
    inputs: PropTypes.arrayOf(
        PropTypes.shape({
            input: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
    editTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
};

export default TaskList;
