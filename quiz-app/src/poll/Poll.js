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
		isAnswered: false,
		selectedChoice: undefined
    }

    this.renderChoices = this.renderChoices.bind(this);
	this.calculatePercentage = this.calculatePercentage.bind(this);
	this.handleAnswered = this.handleAnswered.bind(this);
	  this.renderVotedPoll = this.renderVotedPoll.bind(this);
  }

  calculatePercentage(choice) {
	  console.log(choice);
	  if (this.props.poll.totalVotes === 0) {
		  return 0;
	  }
	  let count = (choice.id === this.state.selectedChoice) ? choice.votes + 1 : choice.votes;
	  return Math.round((choice.votes * 100) / (this.props.poll.totalVotes + 1));
  }

  renderChoices(key){
    return(
		<PollChoices
			id={key.id}
			label={key.label}
			votes={key.votes}
			result={this.state.result}
			handleAnswered={(event) => this.handleAnswered(event)}
			isAnswered={this.state.isAnswered}
		/>
	);
}

	renderVotedPoll(key) {
		return (
			<PollChoices
				id={key.id}
				label={key.label}
				votes={key.votes}
				result={this.calculatePercentage(key)}
				handleAnswered={(event) => this.handleAnswered(event)}
				handleChoiceSelected={this.props.handleChoiceSelected}
				isAnswered={this.state.isAnswered}
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
	console.log("Handle Anss " + event);
	this.setState({
		isAnswered: true,
		selectedChoice: event
	}, () => {
	});
	this.props.handleChoiceSelected(event);
}

  render(){
	  //TODO : remove temporary usernames.
	  const poll = this.props.poll;
	  let pollChoices = {};
	  if (this.state.isAnswered) {
		  pollChoices = poll.choices.map(this.renderVotedPoll);
	  } else {
		  pollChoices = poll.choices.map(this.renderChoices);
	  }
        return(
			<div className = 'poll-content'>
				<div className = 'poll-creator-info'>
					<UserInfo
						username={(poll.createdBy !== null) ? poll.createdBy.username : "Ramu"}
						name={(poll.createdBy !== null) ? poll.createdBy.name : "romil17"}
					/>
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