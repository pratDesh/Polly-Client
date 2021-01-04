import React, { Component } from 'react';
import './Poll.css';
import Question from './Question';
import ReactInfo from './ReactInfo';
import PollChoices from './PollChoice';
import UserInfo from './UserInfo';
import { PollList } from './PollList';

class Poll extends Component {
  constructor(props){
    super(props)
    this.state = {
	  result: undefined,
	  isAnswered: false
    }

    this.renderChoices = this.renderChoices.bind(this);
	this.calculatePercentage = this.calculatePercentage.bind(this);
	this.handleAnswered = this.handleAnswered.bind(this);
  }

  calculatePercentage(choice) {
    if(this.props.poll.totalVotes === 0){
      return 0;
    }
    return (choice.votes*100)/this.props.poll.totalVotes;
  }

  renderChoices(key){
    return(
        <PollChoices 
          id={key.id}
          label={key.label}
		  votes={key.votes}
		  result = {this.state.result}
		  handleAnswered = {(event) => this.handleAnswered(event)}
		  handleChoiceSelected = {this.props.handleChoiceSelected}
		  isAnswered = {this.state.isAnswered}
        />
	);
}

renderVotedPoll(key){
	return(
		<PollChoices 
			id={key.id}
			label={key.label}
			votes={key.votes}
			result = {this.state.result}
			calculatePercentage = {this.calculatePercentage(key.id)}
		/>
	);
}


choiceSelected(choice){
  alert(choice);
  this.setState({
    result:25
  });
}

handleAnswered(event){
	console.log("Inside handle answer");
	this.setState({
		isAnswered: true
	}, () => {
		console.log("Is Answered ",this.state.isAnswered);
	});
	this.props.handleChoiceSelected(event);
}

  render(){
		const poll = this.props.poll;
		const pollChoices = poll.choices.map(this.renderChoices);
        return(
			<div className = 'poll-content'>
				<div className = 'poll-creator-info'>
					<UserInfo />
				</div>
				<div className='poll-header'>
					<Question content={poll.question} />
				</div>
				<div className='poll-choices'>
					{pollChoices}
				</div>
				<div className='poll-footer'>
					<ReactInfo/>
				</div>
			</div>
        );
  }

}

export default Poll