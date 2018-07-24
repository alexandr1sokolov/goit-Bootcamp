import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// const el = React.createElement('h1', null, 'React is the best'); // параметры type, props (settings), child, child
// const el = React.createElement('h1', {className:'title'}, 'React is the best');
// const el = React.createElement('div', {className:'box'}, React.createElement('h1', {className:'title'}, 'React is the best'),React.createElement('p', {className:'text'}, 'Lorem ipsum text'));
// // console.log('Element', el);
// ReactDOM.render(el,document.getElementById('root'));             // параметры первым передается элемент который создали, вторым куда хотим вставить

//================JSX

// const el = <div className="box">
//     <h1 className="title">Title</h1>
//     <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae dignissimos dolor, eligendi eos esse, est excepturi impedit iure iusto labore officiis optio perferendis tenetur ut vero, voluptate voluptates voluptatum!</p>
// </div>;
// ReactDOM.render(el,document.getElementById('root'));

// // const el = <h1>sum 2 +2 = {2 + 2}</h1>;
// const a = 4;
// const b = 5;
// // const el = <h1>sum 2 +2 = {2 + 2}</h1>;
// // const el = <h1>sum {a + b}</h1>;
// const isActive  = true;
// const el = <h1 className={isActive ? 'active' : 'disable'}>Title</h1>;
//
// ReactDOM.render(el, document.getElementById('root'));

// const MyFirstComp =()=> {
//     return <div>My first component</div>
// };
//
// ReactDOM.render(<MyFirstComp/>, document.getElementById('root'));

// const Header =()=><h1>Header</h1>;
// const Main =()=><h1>Main</h1>;
// const Footer =()=><h1>Footer</h1>;

// const App =()=> {
//     return(
//         <div>
//             <Header/>
//             <Main/>
//             <Footer/>
//         </div>
//
//     )
// };

import App from './components/App/app';
ReactDOM.render(<App/>, document.getElementById('root'));