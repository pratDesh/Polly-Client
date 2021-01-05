import React, { Component } from 'react';
import './Login.css';

class Login extends Component{

    render(){

        return(
            <div>
                Login
            </div>
        );
    }
}

class SocialLogin extends Component{
    render(){
        return(
            <div className="login-container">
                <div className="login-content">
                    <h1 className="login-title">Login to Polly</h1>
                    <SocialLogin />
                    <div className="or-separator">
                        <span className="or-text">OR</span>
                    </div>
                    <LoginForm {...this.props} />
                    <span className="signup-link">New user? <Link to="/signup">Sign up!</Link></span>
                </div>
            </div>
        );
    }
}

class LoginForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const field = target.name;
        const value = target.value;

        this.setState({
            [field] : value
        });
    }

    handleSubmit(event){
        event.preventDefault;

        const loginRequest = Object.assign({}, this.state);

        //API call to Login.
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-item">
                        <input 
                            type="email"
                            name="username"
                            className="form-control"
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-item">
                        <input 
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-item">
                        <button type="submit" className="btn btn-block btn-primary">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login