import React, { Component } from 'react';
import './Poll.css';
import PropTypes from 'prop-types';
import Question from './Question';
import { CSSTransitionGroup } from 'react-transition-group';
import ReactInfo from './ReactInfo';
import PollChoices from './PollChoice';
import UserInfo from './UserInfo';
import { PollList } from './PollList';

class Poll extends Component {
  constructor(props){
    super(props)
    this.state = {
      result: undefined
    }

    this.renderChoices = this.renderChoices.bind(this);
    this.isAnswerSelected = this.isAnswerSelected.bind(this);
    this.choiceSelected = this.choiceSelected.bind(this);
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
		  choiceSelected = {this.props.handleChoiceSelected}
        />
    );
}

choiceSelected(choice){
  alert(choice);
  this.setState({
    result:25
  });
}

isAnswerSelected(type){
   return this.props.isAnswered && ('Sony' === type) ? true : false;
}

  render(){
		const poll = this.props.poll;
		const pollChoices = poll.choices.map(this.renderChoices);
        return(
			<div className = 'poll-content'>
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



// Poll.propTypes = {
//     answer: PropTypes.string.isRequired,
//     answerOptions: PropTypes.array.isRequired,
//     counter: PropTypes.number.isRequired,
//     question: PropTypes.string.isRequired,
//     questionId: PropTypes.number.isRequired,
//     questionTotal: PropTypes.number.isRequired,
//     onAnswerSelected: PropTypes.func.isRequired
// };

export default Poll