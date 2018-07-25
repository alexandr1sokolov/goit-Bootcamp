import React, {Component} from 'react';
import styles from './form.css'
// const input = {
//   padding: '10px',
//   border: '2px solid #FFF',
//   width: '165px',
// };
//
// const buttonStyle ={
//   padding: '10pcx',
//   fontSize: '16px',
//   margin: '10px',
//   marginRight: '0px',
//   backgroundColor: '#0066FF',
//   color: '#FFF',
//   border: '2px solid #0066FF',
// };

class NewForm extends Component {
    state ={
        login:'',
        password:'',
    };
  send=(e)=>{
    e.preventDefault();
  };

    // changeLoginInput = (e)=>{
    //     const value = e.target.value;
    //     this.setState({
    //         login: value,
    //     })
    // };
    // changePasswordInput = (e)=>{
    //     const value = e.target.value;
    //     this.setState({
    //         password: value,
    //     })
    // };

    changeInput = (e)=>{
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name]:value,
        })
    };

    render(){
        return(
            <form onSubmit={this.send} className='input'>
                <input onChange={this.changeInput}
                       type="text"
                       name="login"
                       placeholder="Your login"
                       value={this.state.login}
                       className={styles.input}
                />
                <input onChange={this.changeInput}
                       type="password"
                       name="password"
                       placeholder="Your password"
                       value={this.state.password}
                       className={styles.input}
                />
                <button type='submit' className={styles.btn}>Send</button>
            </form>
        )
    }
}

export default NewForm;
