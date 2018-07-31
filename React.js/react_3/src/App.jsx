import React, {Component} from 'react';
import axios from 'axios';
import styles from './App.css';
import ToDoList from './Components/ToDoList/ToDoList';
import Button from './Components/Button/Button';

class App extends Component {

    state={
        items:[],
        item:'',
    };

    componentDidMount(){
        axios.get('/tasks')
            // .then(response=> console.log(response))
            .then(({status, data})=>{
                if (status === 200){
                    this.setState({
                        items: data
                    })
                }
            });
    }

    addItem =(event)=>{
        event.preventDefault();
        const task = {text: this.state.item};

        if (this.state.item !==''){
            axios.post('/tasks',task)
                .then(({data, status})=>{if(status === 201){
                    this.setState(prevState =>({
                        items:[data, ...prevState.items],
                        item:'',
                    }))
                }})
        }
        //==============старая версия
        // const task = {
        //     text: this.state.item,
        //     id: Date.now(),
        // };
        //
        // if (this.state.item !==''){
        //     this.setState(prevState=> ({
        //         items:[task, ...prevState.items],
        //         item: '',
        //     }))}
    };

    itemChange =({target})=>{
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        })
    };

    deleteItem =(id)=>{

        axios.delete(`/tasks/${id}`)
            .then(({status}) => {
                if (status === 200) {
                    this.setState({
                        items: this.state.items.filter(el => el.id !== id)
                    })
                }
            })
      // const filter =this.state.items.filter(el=>el.id!==id);
      //
      // this.setState({
      //     items:filter
      // })
    };

    updateItem= (id,text)=>{
        const task = this.state.items.find(el => el.id ===id);
        axios.put(`/tasks/${id}`,{...task, text:text})
            .then(({status,data}) => {
            if (status === 200) {
                this.setState({
                    items: this.state.items.map(el=>(el.id===id? data:el))
                })
            }
        })
        // const updateResult = this.state.items.map(el=>(el.id===id? {...el, text:text}:el));
        //
        // this.setState({
        //     items:updateResult,
        // })
           };

    render(){
        return(
            <div className={styles.todoListMain}>
                <div>
                    <form onSubmit={this.addItem}>
                        <input
                            onChange={this.itemChange}
                            name='item'
                            value={this.state.item}
                            placeholder='Enter task'
                            className={styles.input}
                            type="text"
                        />
                        <Button text='Add' type='submit'/>  
                        {/* <button type='submit' className={styles.btn}>Add</button> */}
                    </form>
                    <ToDoList 
                    tasks={this.state.items}
                    deleteItem={this.deleteItem}
                    update ={this.updateItem}
                    />
                </div>
            </div>
        )
    }
}

export default App;