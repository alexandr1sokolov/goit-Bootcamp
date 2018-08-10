import React, { Component } from 'react';
import { connect } from 'react-redux';
import {input} from './actions/inputUpdateAction';
import {inputCleaner} from './actions/inputUpdateAction';
import {addTask} from './actions/tasksAction';

import './App.css';
import ToDoList from './Components/ToDoList/ToDoList'

class App extends Component {

    inputHandler =(event)=>{
        event.preventDefault();
        if(this.props.input !== ''){
            this.props.addInput(this.props.input); this.props.inputCleaner();
        }
    };
    render() {
        return (
            <div className='container'>
                <div className='container__form'>
                    <h1 className='header'>ToDo List</h1>
                    <form onSubmit={this.inputHandler}>
                        <input className='input' onChange={this.props.inputFunc} type="text" name='input' value={this.props.input} />
                        <button className='container__btn' type='submit'>Create</button>
                    </form>
                </div>
                <ToDoList />
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        input: state.input,
        inputsArr: state.inputsArr
    }
}

function mapDispatchToProps (dispatch) {
    return {
        inputFunc: function({target}) {
            dispatch(input(target.value))
        },
        addInput: function(value) {
            dispatch(addTask(value))
        },
        inputCleaner:function() {
            dispatch(inputCleaner())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);

