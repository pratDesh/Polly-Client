import React from 'react';
import PropTypes from 'prop-types';

export default function AnswerOption(props) {
    //console.log('Answerc type '+props.answerType + " answerSelected "+ props.isAnswerSelected);
    // return(
    //     <li className= {"answerOption " + ((props.isAnswerSelected) ? "selectedAnswerOption": "")}>
    //         <input 
    //             className = "customRadioButton"
    //             name = "radioGroup"
    //             checked = {props.answerType === props.answer}
    //             id = {props.answerType}
    //             // value = {props.answerType}
    //             disabled = {props.answer}
    //             onChange = {props.onAnswerSelected}
    //         />
    //         <label className="radioCustomLabel" htmlFor={props.answerType}>
    //             {props.answerContent}
    //         </label>
    //     </li>
    // );

    const labelClass = 'custom-control-label pl-4 position-relative';
    return(
        <div key='1' className="custom-control custom-radio px-0 py-2 d-flex align-items-center">

						<input className="custom-control-input" type="radio" name="poll-response"/>

						<label className={labelClass}>
							<small>option1</small>
						</label>

					</div>
    );
}

AnswerOption.propTypes = {
    answerType: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};
  