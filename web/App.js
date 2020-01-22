import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleInputPassword = this.handleInputPassword.bind(this);
        this.handleInputUsername = this.handleInputUsername.bind(this);
        this.handleSumit = this.handleSumit.bind(this);
    }
    handleInputUsername(event) {
        this.setState({
            username: event.target.value
        })
    }

    handleInputPassword(event) {
        this.setState({
            password: event.target.value
        })
    }
    handleSumit() {
        let dataToDb = {
            email: this.state.username,
            password: this.state.password,
        }
        axios.post('http://localhost:3000/api/login',dataToDb).then(res =>{
            if(res.status === 200){
                alert('Login Successed');
            }
        }).catch(e =>{
            if(e){
                alert('username and password is not valid');
            }
        })
    }
    render() {
        // start your code here
        return (
            <div className="container">
                <div className="box-login">
                    <div className="logo">
                        <img className={`logo-spin`} src={logo} alt="logo" />
                    </div>
                    <div className="box-inside-login">
                        <label className="label" htmlFor="email">E-mail address</label>
                        <input type="text" name="email" className="form-control" id="email" onChange={this.handleInputUsername} placeholder="Yourmail@mail.com" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                        <label className="label" htmlFor="password">Password</label>
                        <input type="password" name="password" className="form-control mt-5" id="password" onChange={this.handleInputPassword} placeholder="Your password" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                        <button className="btn btn-primary" onClick={this.handleSumit}>Sign in </button>
                    </div>
                    <div className="member-help">
                        <div className="forgot-password">
                            <a href="#">
                                Forgot password ?
                            </a>
                        </div>
                        <div className="create-new">
                            <a href="#">
                                Create a new account
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default App;
