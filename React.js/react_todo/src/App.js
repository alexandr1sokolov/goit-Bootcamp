import React, { Component } from 'react';
import { connect } from 'react-redux';
import {input} from './actions/inputUpdateAction';
import {inputCleaner} from './actions/inputUpdateAction';
import {addInput} from './actions/addTaskAction';

import './App.css';
import ToDoList from './Components/ToDoList/ToDoList'
import inputsArr from "./reducers/addTaskReducer";

class App extends Component {

    // state={
    //     input:'',
    //     inputsArr:[],
    //
    // };

    // addInput = (event) => {
    //     event.preventDefault();
    //         this.setState(prevState => ({
    //             inputsArr: [{input: this.state.input, id:Date.now()}, ...prevState.inputsArr],
    //             input: '',
    //         }))
    // };

    // deleteToDo = (id) => {
    //     this.setState({
    //         inputsArr: this.state.inputsArr.filter(el => el.id !== id)
    //     })
    // };
    //
    // editToDo = (id, input) => {
    //     this.setState({inputsArr: this.state.inputsArr.map(el => el.id === id ? {...el, input} : el)})
    // };

    inputHandler =(event)=>{event.preventDefault(); this.props.addInput(this.props.inputValue);this.props.inputCleaner()};
    render() {
        console.log(this.props);
        return (
            <div className='container'>
                <div className='container__form'>
                    <h1 className='header'>ToDo List</h1>
                    <form onSubmit={this.inputHandler}>
                        <input className='input' onChange={this.props.input} type="text" name='input' value={this.props.inputValue} />
                        <button className='container__btn' type='submit'>Create</button>
                    </form>
                </div>
                <ToDoList //inputs={this.state.inputsArr}
                          editToDo={this.editToDo}
                          deleteToDo={this.deleteToDo}
                          //addInput = {this.addInput}
                />
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        inputValue: state.input,
        inputsArr: state.inputsArr
    }
}

function mapDispatchToProps (dispatch) {
    return {
        input: function({target}) {
            dispatch(input(target.value))
        },
        addInput: function(value) {
            dispatch(addInput(value))
        },
        inputCleaner:function() {
            dispatch(inputCleaner())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
// export default App;
