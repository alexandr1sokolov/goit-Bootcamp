
import React, { Component } from 'react';
import axios from 'axios';
import styles from './App.css';
import TaskList from './Components/TaskList/TaskList';

class App extends Component {

    state={
        input:'',
        inputsArr:[],
        placeholder:' New Task',
    };

    componentDidMount(){
    axios.get('/tasks').then(({data,status})=>{if(status === 200){this.setState({inputsArr: data})}});
  }

  warningBlank = () => {
    this.setState({
      placeholder: ' You can\'t create blank task'
    });
  };

  addInput =(event)=>{
    event.preventDefault();

    const newInput ={
        input: this.state.input,
      };

    if (this.state.input !=='')
    {
      axios.post('/tasks', newInput)
        .then(({data, status}) => {
        if (status === 201) {
          this.setState(prevState => ({
            inputsArr: [data, ...prevState.inputsArr],
            input: '',
            placeholder:' New Task',
          }))
        }
      });
    } else {
      this.warningBlank()
    }};


    // const newInput ={
    //   input: this.state.input,
    //   id: Date.now(),
    // };
    //
    // return this.state.input !=='' ? this.setState(prevState=>({inputsArr:[newInput, ...prevState.inputsArr],input: '', placeholder:' New Task',})):this.warningBlank();
  // };

    updateInput =({target})=>{
        const input= target.name;
        const value= target.value;

        this.setState({
            [input]:value,
        })
    };


  deleteTask = (id) => {
    axios.delete(`/tasks/${id}`).then(({status}) => {
      if (status === 200) {
        this.setState({
          inputsArr: this.state.inputsArr.filter(el=> el.id !== id)
        })
      }
    })
  };
    // deleteTask = (id)=>{this.setState({
    //     inputsArr: this.state.inputsArr.filter(el=> el.id !== id)
    // })};

  editTask = (id, input) => {
    axios.put(`/tasks/${id}`, input)
      .then(({status, data}) => {
        if (status === 200) {
          this.setState({inputsArr: this.state.inputsArr.map(el => el.id === id ? {...data, input} : el)})
        }
      })
  };

    // editTask = (id,input)=>{
    //     this.setState({
    //         inputsArr: this.state.inputsArr.map(el=> el.id === id? {...el,input}:el)
    //     })
    // };

    render() {
    return (
      <div className={styles.container}>
          <div className={styles.container__form}>
              <h1 className={styles.header}>ToDo List</h1>
              <form onSubmit={this.addInput}>
                  <input className={styles.input} onChange={this.updateInput} type="text" name='input' value={this.state.input} placeholder={this.state.placeholder}/>
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
