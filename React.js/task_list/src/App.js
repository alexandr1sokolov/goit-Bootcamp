/* eslint-disable */
import React, { Component } from 'react';
import styles from './App.css';

class App extends Component {

    state={
        input:'',
        inputsArr:[],
    };

    addInput =(event)=>{
       event.preventDefault();

       let newInput ={
        input: this.state.input,
        id: Date.now(),
       };

        this.state.input !=='' ? this.setState(prevState=>({inputsArr:[newInput, ...prevState.inputsArr],input: '',})):null;
    };

    updateInput =({target})=>{
        let input= target.name;
        let value= target.value;

        this.setState({
            [input]:value,
        })
    };

    render() {
    return (
      <div className={styles.container}>
          <h1 className={styles.header}>ToDo LIST</h1>
          <form onSubmit={this.addInput}>
              <input onChange={this.updateInput} type="text" name='input' value={this.state.input} placeholder='New Task'/>
              <button type='submit'>Create</button>
          </form>
      </div>
    );
  }
}

export default App;
