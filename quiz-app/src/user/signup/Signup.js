import React, {Component} from 'react';
import './Signup.css';

class Signup extends Component{
    
    render(){
        return (
            <div className="signup-container">
                <div className="signup-content">
                    <h1 className="signup-title">Signup to Polly</h1>
                    <SocialSignup />
                    <div className="or-separator">
                        <span className="or-text">OR</span>
                    </div>
                    <SignupForm {...this.props} />
                    <span className="login-link">Already have an account? Login!</span>
                </div>
            </div>
        );
    }
}

class SocialSignup extends Component {
    render() {
        return (
            <div className="social-signup">
                {/* <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                    <img src={googleLogo} alt="Google" /> Sign up with Google</a>
                <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
                    <img src={fbLogo} alt="Facebook" /> Sign up with Facebook</a> */}

                <a className="btn btn-block social-btn google" >
                    <img  alt="Google" /> Sign up with Google</a>
                <a className="btn btn-block social-btn facebook" >
                    <img  alt="Facebook" /> Sign up with Facebook</a>
            </div>
        );
    }
}

class SignupForm extends Component{

    constructor(props){
        super(props)
        this.state = {
            name:'',
            email:'',
            password:''
        }


    }

    handleInputChange(event){
        const target = event.target;
        const field = target.name;
        const value = target.value;

        this.setState({
            [field]:value
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();   
        const signUpRequest = Object.assign({}, this.state);

        //Todo Signup API
    }

    render(){

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-item">
                        <input type="text" name="name" 
                            className="form-control" placeholder="Name"
                            value={this.state.name} onChange={this.handleInputChange} required/>
                    </div>
                    <div className="form-item">
                        <input type="email" name="email" 
                            className="form-control" placeholder="Email"
                            value={this.state.email} onChange={this.handleInputChange} required/>
                    </div>
                    <div className="form-item">
                        <input type="password" name="password" 
                            className="form-control" placeholder="Password"
                            value={this.state.password} onChange={this.handleInputChange} required/>
                    </div>
                    <div className="form-item">
                        <button type="submit" className="btn btn-block btn-primary" >Sign Up</button>
                    </div>
                </form>           
            </div>
        );
    }
}

export default Signup;