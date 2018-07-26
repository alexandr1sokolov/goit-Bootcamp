import React, {Component} from 'react';
import styles from './App.css'
import ToDoList from './Components/ToDoList/ToDoList'
import Button from './Components/Button/Button'

class App extends Component {

    state={
        items:[],
        item:'',
    };

    addItem =(event)=>{
        event.preventDefault();
        const task = {
            text: this.state.item,
            id: Date.now(),
        };

        if (this.state.item !==''){
            this.setState(prevState=> ({
                items:[task, ...prevState.items],
                item: '',
            }))}
    };

    itemChange =({target})=>{
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        })
    };

    deleteItem =(id)=>{
      const filter =this.state.items.filter(el=>el.id!==id);

      this.setState({
          items:filter
      })
    };

    

    updateItem= (id,text)=>{
        const updateResult = this.state.items.map(el=>(el.id===id? {...el, text:text}:el))
       
        this.setState({
            items:updateResult,
        })
           }

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