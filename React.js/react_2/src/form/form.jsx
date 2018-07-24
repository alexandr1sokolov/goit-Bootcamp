import React, {Component} from 'react';

class NewForm extends Component {
    send=(e)=>{
        e.preventDefault();
        console.log('test');
    };

    state ={
        login:'',
        password:'',
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
            <form onSubmit={this.send}>
                <input onChange={this.changeInput}
                       type="text"
                       name="login"
                       placeholder="Your login"
                       value={this.state.login}/>
                <input onChange={this.changeInput}
                       type="password"
                       name="password"
                       placeholder="Your password"
                       value={this.state.password}/>
                <button type='submit'>Send</button>
            </form>
        )
    }
}

export default NewForm;