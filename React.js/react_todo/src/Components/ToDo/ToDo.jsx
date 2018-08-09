
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {input} from '../../actions/inputUpdateAction'
import Button from '../Button/Button'
import './ToDo.css'

class ToDo extends Component {

    // state ={
    //     isModified: false,
    //     input:this.props.input,
    // };

    // handleDelete =()=>{
    //     this.props.deleteToDo(this.props.id)
    // };

    // updateInput =({target})=>{
    //     const input= target.name;
    //     const value= target.value;
    //
    //     this.setState({
    //         [input]:value,
    //     })
    // };

    // toggle =()=> {
    //     this.setState(prevState=>({
    //         isModified:!prevState.isModified,
    //     }))
    // };
    //
    // handleEdit=()=>{
    //     this.props.editToDo(this.props.id, this.state.input);
    //     this.toggle();
    // };

    render() {
        return (
            this.state.isModified?
                <div>
                    <li className='task'>
                        <input className='input' onChange={this.props.updateInput} type="text" value={this.props.input} name='input'/>
                        <div>
                            <Button onClick={this.handleEdit} text='Save'/>
                            <Button onClick={this.toggle} text='Cancel'/>
                        </div>
                    </li>
                </div>
                :
                <div >
                    <li className='task'>
                        {this.props.input}
                        <div>
                            <Button onClick={this.toggle} text='Edit'/>
                            <Button onClick={this.handleDelete} text='Delete'/>
                        </div>
                    </li>
                </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        input: state.updateInput
    }
}

function mapDispatchToProps (dispatch) {
    return {
        updateInput: function({target}) {
            dispatch(input(target.value))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (ToDo);
// export default ToDo;

