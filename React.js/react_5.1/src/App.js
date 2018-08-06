import React, { Component } from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import Home from './Components/Home.jsx';
import Team from './Components/Team.jsx';
import data from './data.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/team'>Team</NavLink>
          </nav>
        </header>
        <Switch>
          <Route exact path ='/' component={Home}/>
          <Route path ='/team' render={props =><Team {...props} data={data}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
