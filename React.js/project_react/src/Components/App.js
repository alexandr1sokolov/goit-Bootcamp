import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Search from '../Components/Search/Search.jsx'
import Card from '../Components/Card/Card'
import './App.css';

const App = () => {
    return (
        <div className='wrapper'>
            <div className="container">
                <Sidebar/>
                <main className='main'>
                    <Search/>
                    <Card/>
                </main>
            </div>
        </div>
    )
};

export default App;
