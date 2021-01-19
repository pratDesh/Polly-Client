import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import quizQuestions from './api/quizJsonQuestions';
import Poll from './poll/Poll';
import { PollList } from './poll/PollList';
import NewPoll  from './poll/NewPoll/NewPoll';
import Login from './user/login/Login';
import Signup from './user/signup/Signup';
import Header from './navigation/Header';
import Navigation from './navigation/Navigation';

import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom';

import { Layout, notification } from 'antd';
import { getCurrentUser } from './utils/APIUtils';
const { Content } = Layout;

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: false,
      flag: false
    }
  }

  loadCurrentUser(){
    this.setState({
      isLoading: true
    })
    getCurrentUser()
    .then(response => {
      this.setState({
        currentUser: response,
        isAuthenticated: true,
        isLoading: false
      })
    }).catch(error => {
      this.setState({
        isLoading: false
      })
    });
  }

  componentDidMount(){
    this.loadCurrentUser();
  }

  render(){

    return(
      <div className="app-container">
          <BrowserRouter>
            <Navigation
              isAuthenticated = {this.state.flag}
              currentUser = {this.state.currentUser}
            />
              {/* <Header/> */}
              <Content className="app-content">
                <div className="container">
                  <Switch>      
                    <Route exact path="/" 
                      render={(props) => <PollList isAuthenticated={this.state.isAuthenticated} 
                          currentUser={this.state.currentUser} {...props} />}>
                    </Route>
                    <Route path="/login" 
                      render={(props) => <Login />}></Route>
                    <Route path="/signup" component={Signup}></Route>
                  </Switch>
                </div>
              </Content>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;