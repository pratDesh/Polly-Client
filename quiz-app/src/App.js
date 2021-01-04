import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import quizQuestions from './api/quizJsonQuestions';
import Poll from './poll/Poll';
import { PollList } from './poll/PollList';
import NewPoll  from './poll/NewPoll';
import Tryfile from './poll/Tryfile';

class App extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="poll-container">
        <NewPoll />
        <PollList />
      </div>
    );
  }
}

export default App;