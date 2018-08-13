import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reset, incAsync, decAsync} from './actions/counterActions';
import {galleryAsync} from './actions/galleryAction'
import './Counter.css';


class Counter extends Component {

    // state ={
    //     counter: 0,
    // }


    // add = () =>{
    //     this.setState(prev =>({
    //         counter: prev.counter +=1,
    //     }))
    // }


    // substr = () =>{
    //     this.setState(prev =>({
    //         counter: prev.counter -=1,
    //     }))
    // }


    // reset = () => {
    //     this.setState({
    //         counter: 0,
    //     })
    // }

    render() {
        return (
            <div className='redux'>
                <h1>{this.props.counter}</h1>
                <button onClick={this.props.decrement}>-</button>
                <button onClick={this.props.reload}>reset</button>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.galleryFetch}>FETCH</button>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps (dispatch) {
    return {
        increment: function() {
            dispatch(incAsync(1))
        },
        decrement: function(){
            dispatch(decAsync(1))
        },
        reload: function(){
            dispatch(reset())
        },
        galleryFetch(){
            dispatch(galleryAsync())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Counter);