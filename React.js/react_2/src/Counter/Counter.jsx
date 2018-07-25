// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
//
//
// class Counter extends React.Component{
//     // static propTypes ={
//     //     start: PropTypes.number,
//     // };
//     // static defaultProps = {
//     //     start: 0,
//     // };
//     // constructor(){
//     //     super();
//     //
//     //     this.state ={
//     //         counterStart: 0,
//     //     };
//     //
//     //     this.plus = this.plus.bind(this);
//     //     this.minus = this.minus.bind(this);
//     // }
//
//     state ={
//         counterStart: 0,
//     };
//
//     plus=()=>{
//         console.log('plus');
//         this.setState(prevState =>({counterStart: prevState.counterStart +1}), ()=> console.log('async state',this.sate.counterStart)) //выводит результат работы асинхронной функции
//     };
//
//     minus=()=>{
//         console.log('minus');
//         return this.state.counterStart === 0 ? null : this.setState(prevState =>({counterStart: prevState.counterStart -1}));
//     };
//
//     render(){
//         // let {start} =this.props;
//         const {counterStart} = this.state;
//         return (<div>
//             <p>{counterStart}</p>
//             <button onClick={this.minus}>Minus</button>
//             <button onClick={this.plus}>Plus</button>
//         </div>)
//     }
// }
// export default Counter
