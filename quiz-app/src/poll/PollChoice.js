import React, { Fragment } from 'react';
import { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './PollChoice.css';

class PollChoices extends Component {
    constructor(props){
        super(props);

    }
    render(){
        const choice = this.props.label;
        const result = this.props.result;
        const choiceId = this.props.id;
        const selectedChoice = this.props.selectedChoice;

        return(
            <div className = "poll-choice" onClick={() => this.props.handleAnswered(choiceId)}>
                <Row>
                    <Col>
                    <label>
                        {choice}
                    </label>
                    </Col>

                       <Col> </Col>
                     <Col>
                     {
                            this.props.isAnswered ? (
                                <div>
                                    <span> {result} % </span>
                                </div>
                            ) :null
                        }
                     </Col>
                </Row>
            </div>
        );

    }
}

export default PollChoices;