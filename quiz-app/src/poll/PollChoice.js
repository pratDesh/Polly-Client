import React, { Fragment } from 'react';
import { Component } from 'react';
import Card from "react-bootstrap/Card";
import './PollChoice.css';

class PollChoices extends Component {
    constructor(props){
        super(props);
        
    }
    render(){
        const choice = this.props.label;
        const result = this.props.result;
        const choiceId = this.props.id;

        return(
            <div className = "poll-choice">
                <label onClick={() => this.props.handleAnswered(choiceId)}>
                    {choice}
                </label>
                {
                    this.props.isAnswered ? (
                        <div>
                            <span> Hello </span>
                        </div>
                    ) :null
                }
            </div>
        );
      
    }
}

export default PollChoices;