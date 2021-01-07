import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import quizQuestions from './api/quizJsonQuestions';
import Poll from './poll/Poll';
import { PollList } from './poll/PollList';
import NewPoll  from './poll/NewPoll/NewPoll';
import Login from './user/login/Login';
import Signup from './user/signup/Signup';

class App extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="poll-container">
        <Signup />
        <Login />
        <NewPoll />
        <PollList />
      </div>
    );
  }
}

export default App;