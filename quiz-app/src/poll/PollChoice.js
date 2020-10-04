import React, { Fragment } from 'react';
import { Component } from 'react';
import Card from "react-bootstrap/Card";
import '../index.css';

class PollChoices extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const choice = this.props.choice;
        const result = this.props.result;

        return(
            <div className = "poll-choice">
                <label onClick={() => this.props.choiceSelected(choice)}>
                    <small>{choice}</small>
                </label>
                { result ? <div>{result}%</div> : undefined}
            </div>
        );
      
    }
}

export default PollChoices;