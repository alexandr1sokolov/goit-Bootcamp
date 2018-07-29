
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button'
import styles from './Task.css'

class Task extends Component {

    state ={
        isModified: false,
        input:this.props.input,
    };

    handleDelete =()=>{
        this.props.deleteTask(this.props.id)
    };

    updateInput =({target})=>{
        const input= target.name;
        const value= target.value;

        this.setState({
            [input]:value,
        })
    };

    toggle =()=> {
        this.setState(prevState=>({
            isModified:!prevState.isModified,
        }))
    };

    handleEdit=()=>{
        this.props.editTask(this.props.id, this.state.input);
        this.toggle();
    };

    render() {
        const {input} = this.props;
        return (
            this.state.isModified?
                <div>
                    <li className={styles.task}>
                        <input className={styles.input} onChange={this.updateInput} type="text" value={this.state.input} name='input'/>
                        <div>
                            <Button onClick={this.handleEdit} text='Save'/>
                            <Button onClick={this.toggle} text='Cancel'/>
                        </div>
                    </li>
                </div>
                :
                <div >
                    <li className={styles.task}>
                        {input}
                        <div>
                            <Button onClick={this.toggle} text='Edit'/>
                            <Button onClick={this.handleDelete} text='Delete'/>
                        </div>
                    </li>
                </div>
        );
    }
}

Task.propTypes = {
    input: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    deleteTask: PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired,
};

export default Task;

