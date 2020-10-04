import React from 'react';
import PropTypes from 'prop-types';

export default function Question(props){
    return(
        <h5 className="question">{props.content} </h5>
    );
}

Question.propTypes = {
    content: PropTypes.string.isRequired
};
