import React, { Component } from 'react';
import { connect } from 'react-redux';
import {input} from '../../actions/inputUpdateAction';
import {deleteTask,editTask, isActive} from '../../actions/tasksAction';
import {read, change} from '../../actions/editFieldAction';
import Button from '../Button/Button';
import './ToDo.css'



class ToDo extends Component {


    editTask = () => {
        this.props.editTaskFunc(this.props.id, this.props.editField,);
        this.update();
    };

    update =()=> {
        this.props.isActiveToggle(this.props.id)
    };

    readValue=()=>{
        this.props.read(this.props.text);
        this.update();
    };

    changeValue =(e)=>{
        this.props.change(e.target.value)
    };

    render() {
        return (
            this.props.isActive ?
                <div>
                    <li className='task' id={this.props.id}>
                        <input className='input' onChange={this.changeValue} type="text" value={this.props.editField}  name='input'/>
                        <div>
                            <Button onClick={this.editTask} text='Save'/>
                            <Button onClick={this.update} text='Cancel'/>
                        </div>
                    </li>
                </div>
                :
                <div >
                    <li className='task' id={this.props.id}>
                        {this.props.text}
                        <div>
                            <Button onClick={this.readValue} text='Edit'/>
                            <Button onClick={this.props.deleteFunc} text='Delete'/>
                        </div>
                    </li>
                </div>
        )}
}

function mapStateToProps (state) {
    return {
        editField: state.editField,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        deleteFunc:function({target}) {
            dispatch(deleteTask(+target.closest('.task').id));
        },
        editTaskFunc: function (id, input){
            dispatch(editTask(id, input))
        },
        isActiveToggle:function(id) {
            dispatch(isActive(id));
        },
        read:function(text) {
            dispatch(read(text));
        },
        change:function(text) {
            dispatch(change(text));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDo);


