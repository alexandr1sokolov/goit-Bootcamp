import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Counter from "./Counter/Counter";
import NewForm from "./form/form"

const App = ()=> {
    return (
        <div>
            <h1>Main App component</h1>
            {/*<Counter start={0}/>*/}
            <NewForm/>
        </div>
    )
};

export default App;
