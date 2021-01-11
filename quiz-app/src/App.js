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

import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom';

import { Layout, notification } from 'antd';
const { Content } = Layout;

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: false
    }
  }

  render(){

    return(
      <div className="app-container">
          <BrowserRouter>
              <Header/>


          <Content className="app-content">
            <div className="container">
              <Switch>      
                {/* <Route exact path="/" 
                  render={(props) => <PollList isAuthenticated={this.state.isAuthenticated} 
                      currentUser={this.state.currentUser} {...props} />}>
                </Route> */}
                <Route path="/login" 
                  render={(props) => <Login />}></Route>
                <Route path="/signup" component={Signup}></Route>
                {/* <Route path="/users/:username" 
                  render={(props) => <Profile isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} {...props}  />}>
                </Route> */}
                {/* <PrivateRoute authenticated={this.state.isAuthenticated} path="/poll/new" component={NewPoll} handleLogout={this.handleLogout}></PrivateRoute> */}
                {/* <Route component={NotFound}></Route> */}
              </Switch>
              
            </div>
          </Content>

          </BrowserRouter>
        </div>
    );

    // return(
    //   <div className="poll-container">
    //     {/* <Signup />
    //     <Login />
    //     <NewPoll /> */}
    //     <PollList />
    //   </div>
    // );
  }
}

export default App;