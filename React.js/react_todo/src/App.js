import React, { Component } from 'react';
import './App.css';
import ToDoList from './Components/ToDoList/ToDoList'

class App extends Component {

    state={
        input:'',
        inputsArr:[],
        placeholder:' New ToDo',
    };

    warningBlank = () => {
        this.setState({
            placeholder: ' You can\'t create blank task'
        });
    };

    addInput = (event) => {
        event.preventDefault();
        if (this.state.input !== '') {
            this.setState(prevState => ({
                inputsArr: [{input: this.state.input, id:Date.now()}, ...prevState.inputsArr],
                input: '',
                placeholder: ' New ToDo',
            }))
        } else {
            this.warningBlank()
        }
    };

    updateInput =({target})=>{
        const input= target.name;
        const value= target.value;
        this.setState({
            [input]:value,
        })
    };

    deleteToDo = (id) => {
        this.setState({
            inputsArr: this.state.inputsArr.filter(el => el.id !== id)
        })
    };

    editToDo = (id, input) => {
        this.setState({inputsArr: this.state.inputsArr.map(el => el.id === id ? {...el, input} : el)})
    };

    render() {
        return (
            <div className='container'>
                <div className='container__form'>
                    <h1 className='header'>ToDo List</h1>
                    <form onSubmit={this.addInput}>
                        <input className='input' onChange={this.updateInput} type="text" name='input' value={this.state.input} placeholder={this.state.placeholder}/>
                        <button className='container__btn' type='submit'>Create</button>
                    </form>
                </div>
                <ToDoList inputs={this.state.inputsArr}
                          editToDo={this.editToDo}
                          deleteToDo={this.deleteToDo}
                          addInput = {this.addInput}
                />
            </div>
        );
    }
}

export default App;
