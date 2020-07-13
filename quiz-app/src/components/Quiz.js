import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';
import { CSSTransitionGroup } from 'react-transition-group';

class Quiz extends Component {

  constructor(props){
    super(props)

    this.renderAnswerOptions = this.renderAnswerOptions.bind(this);
    this.isAnswerSelected = this.isAnswerSelected.bind(this);
  }

  renderAnswerOptions(key){
    return(
        <AnswerOption 
            key={key.content}
            answerContent={key.content}
            answerType={key.type}
            answer={this.props.answer}
            questionId={this.props.questionId}
            onAnswerSelected={this.props.onAnswerSelected}
            isAnswerSelected = {this.isAnswerSelected(key.type)}
        />
    );
}


isAnswerSelected(type){
   return this.props.isAnswered && ('Sony' === type) ? true : false;
}

  render(){
        console.log("AnswerSelected in Quiz "+this.props.answerSelected);
        console.log("Quiz inside isAnswered "+this.props.isAnswered);
        return(
          <CSSTransitionGroup
          className="container"
          component="div"
          transitionName="fade"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={500}
          transitionAppear
          transitionAppearTimeout={500}
        >
          <div key={this.props.questionId}>
            <QuestionCount counter={this.props.questionId} total={this.props.questionTotal} />
            <Question content={this.props.question} />
            <ul className="answerOptions">
              {this.props.answerOptions.map(this.renderAnswerOptions)}
            </ul>
          </div>
        </CSSTransitionGroup>
      );
  }

}

Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    counter: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz