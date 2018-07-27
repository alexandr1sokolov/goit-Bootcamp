import React, { Component } from 'react';
import styles from './App.css';
import TaskList from './Components/TaskList/TaskList'

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

        this.state.input !=='' ? this.setState(prevState=>({inputsArr:[newInput, ...prevState.inputsArr],input: '',})):alert('Your input is empty!!!');
    };

    updateInput =({target})=>{
        let input= target.name;
        let value= target.value;

        this.setState({
            [input]:value,
        })
    };

    deleteTask = (id)=>{this.setState({
        inputsArr: this.state.inputsArr.filter(el=> el.id !== id)
    })}
    ;

    editTask = (id,input)=>{
        this.setState({
            inputsArr: this.state.inputsArr.map(el=> el.id === id? {...el,input: input}:el)
        })
    }
    ;

    render() {
    return (
      <div className={styles.container}>
          <div className={styles.container__form}>
              <h1 className={styles.header}>ToDo List</h1>
              <form onSubmit={this.addInput}>
                  <input className={styles.input} onChange={this.updateInput} type="text" name='input' value={this.state.input} placeholder='New Task'/>
                  <button className={styles.container__btn} type='submit'>Create</button>
              </form>
          </div>
          <TaskList inputs={this.state.inputsArr}
                    editTask={this.editTask}
                    deleteTask={this.deleteTask}
                    addInput = {this.addInput}
          />
      </div>

    );
  }
}

export default App;
