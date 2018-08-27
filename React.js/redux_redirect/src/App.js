import React, { Component } from 'react';
import {Route, Switch, NavLink} from 'react-router-dom'
import logo from './logo.svg';
import Admin from './Admin';
import Home from './Home';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute'
import './App.css';

class App extends Component {
    state = {
        isLogin: false,
    };

    logIn =()=>{
        this.setState({isLogin:true})
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <nav>
                    <p>
                        <NavLink to='/'>Home</NavLink>
                    </p>
                    <p>
                        <NavLink to='/admin'>Admin</NavLink>
                    </p>
                </nav>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/login' render={(props) => <Login enterMethod={this.logIn} isLogin={this.state.isLogin}{...props}/>}/>
                    <ProtectedRoute path='/admin' authed={this.state.isLogin} component={Admin}/>
                </Switch>
            </div>
        );
    }
}

export default App;
