import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';

function QuestionCount(props){
    return(
        <div className="questionCount">
            Question <span>{props.counter}</span> of <span>{props.total}</span>
        </div>
    );
}

Question.propTypes = {
    counter: PropTypes.number.isRequired,
    total: PropTypes.number.totalCount
};

export default QuestionCount;