
import React, { Component } from 'react';
import Button from '../Button/Button'
import './ToDo.css'

class ToDo extends Component {

    state ={
        isModified: false,
        input:this.props.input,
    };

    handleDelete =()=>{
        this.props.deleteToDo(this.props.id)
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
        this.props.editToDo(this.props.id, this.state.input);
        this.toggle();
    };

    render() {
        const {input} = this.props;
        return (
            this.state.isModified?
                <div>
                    <li className='task'>
                        <input className='input' onChange={this.updateInput} type="text" value={this.state.input} name='input'/>
                        <div>
                            <Button onClick={this.handleEdit} text='Save'/>
                            <Button onClick={this.toggle} text='Cancel'/>
                        </div>
                    </li>
                </div>
                :
                <div >
                    <li className='task'>
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

export default ToDo;

