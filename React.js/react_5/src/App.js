import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Registration from './Registration';
import Order from './Order';
import Profile from './Profile';

class App extends Component {
    state={
        registration: false,
        order: false,
        profile: false,
        isActive:true,
    };


    showModal = (event) => {
        event.stopPropagation();
        const id= event.target.id;
        console.log(id);
        if (event.target.className=== 'overlay' || event.target.className ==='btn'||event.target.className ==='close'){
            this.setState(prevState => ({[id]: !prevState[id], isActive: !prevState.isActive}))
        }

    };


    render() {
        const {registration, order, profile, isActive} =this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          {isActive&& <div>
              <button className="btn" onClick={this.showModal} id='registration'>Registration</button>
              <button className="btn" onClick={this.showModal} id='profile'>Profile</button>
              <button className="btn" onClick={this.showModal} id='order'>Order</button>
          </div>}
        <div>
            {registration&&<Registration close={this.showModal} id='registration'/>}
            {order&&<Order close={this.showModal} id='order'/>}
            {profile&&<Profile close={this.showModal} id='profile'/>}
        </div>
      </div>
    );
  }
}

export default App;
