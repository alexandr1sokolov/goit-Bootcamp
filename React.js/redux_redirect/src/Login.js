import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

class Login extends Component  {
    render() {
        if (this.props.isLogin){
            return (
                <Redirect to={this.props.location.state.from}/>
            )
        }
        return (
            <div>
                <h3>login</h3>
                <button onClick={this.props.enterMethod}>Enter</button>
            </div>
        )
    }
}

export default Login;