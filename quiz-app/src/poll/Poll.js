import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import { CSSTransitionGroup } from 'react-transition-group';
import ReactInfo from './ReactInfo';
import PollChoices from './PollChoice';
import UserInfo from './UserInfo';

class Poll extends Component {

  constructor(props){
    super(props)

    this.state = {
      result: undefined
    }

    this.renderAnswerOptions = this.renderAnswerOptions.bind(this);
    this.isAnswerSelected = this.isAnswerSelected.bind(this);
    this.choiceSelected = this.choiceSelected.bind(this);
  }

  renderAnswerOptions(key){
    return(
        <PollChoices 
          choice={key.content}
          choiceSelected={this.choiceSelected}
          result={this.state.result}
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
        console.log("AnswerSelected in Quiz "+this.props.answerSelected);
        console.log("Quiz inside isAnswered "+this.props.isAnswered);
        return(
          <CSSTransitionGroup
          className="container poll"
          component="div"
          transitionName="fade"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={500}
          transitionAppear
          transitionAppearTimeout={500}
        >
          <div key={this.props.questionId}>
            <UserInfo/>
            <Question content={this.props.question} />
            <ul className="answerOptions">
              {this.props.answerOptions.map(this.renderAnswerOptions)}
            </ul>
            <ReactInfo/>
          </div>
        </CSSTransitionGroup>
      );
  }

}

Poll.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    counter: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};

export default Poll