import React, { Fragment } from 'react';
import { Component } from 'react';
import Card from "react-bootstrap/Card";

class PollChoices extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const choice = this.props.choice;
        const result = this.props.result;

        return <Fragment>
                    <Card>
                        <Card.Body>
                            <label onClick={() => this.props.choiceSelected(choice)}>
                                <small>{choice}</small>
                            </label>
                            <hr/>
                            { result ? <div>{result}%</div> : undefined}
                        </Card.Body>
                    </Card>
                </Fragment>
    }
}

export default PollChoices;