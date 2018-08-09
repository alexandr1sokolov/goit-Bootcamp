import React, { Component } from 'react';
import { connect } from 'react-redux';
import {increase, decrease, reset} from './actions/counterActions';
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
        // const {counter} = this.state;

        return (
            <div className='redux'>
                <h1>{this.props.counter}</h1>
                <button onClick={this.props.decrement}>-</button>
                <button onClick={this.props.reload}>reset</button>
                <button onClick={this.props.increment}>+</button>
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
            dispatch(increase())
        },
        decrement: function(){
            dispatch(decrease())
        },
        reload: function(){
            dispatch(reset())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Counter);