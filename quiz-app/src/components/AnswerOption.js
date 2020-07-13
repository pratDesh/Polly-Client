import React from 'react';
import PropTypes from 'prop-types';

export default function AnswerOption(props) {
    console.log('Answerc type '+props.answerType + " answerSelected "+ props.isAnswerSelected);
    return(
        <li className= {"answerOption " + ((props.isAnswerSelected) ? "selectedAnswerOption": "")}>
            <input 
                type = "radio"
                className = "customRadioButton"
                name = "radioGroup"
                checked = {props.answerType === props.answer}
                id = {props.answerType}
                value = {props.answerType}
                disabled = {props.answer}
                onChange = {props.onAnswerSelected}
            />
            <label className="radioCustomLabel" htmlFor={props.answerType}>
                {props.answerContent}
            </label>
        </li>
    );
}

AnswerOption.propTypes = {
    answerType: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};
  