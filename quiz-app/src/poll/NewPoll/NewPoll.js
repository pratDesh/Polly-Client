import React, { Component } from 'react';
import './NewPoll.css';
import {createPoll} from '../../utils/APIUtils';

import {Form, Input, Button, Select, Col, notification} from 'antd';

import {MAX_CHOICES, POLL_QUESTION_MAX_LENGTH, POLL_CHOICE_MAX_LENGTH} from '../../constants/constants';

const Option = Select.Option;
const FormItem = Form.Item;
const { TextArea } = Input

class NewPoll extends Component{
    constructor(props){
        super(props);
        this.state ={
            question:{
                text:''
            },
            choices:[{
                text:''
            },
            {
                text:''
            }]
        }

        this.addChoice = this.addChoice.bind(this);
        this.removeChoice = this.removeChoice.bind(this);
        this.handleQuestionChange = this.handleQuestionChange.bind(this);
        this.handleChoiceChange = this.handleChoiceChange.bind(this);
        this.isFormInvalid = this.isFormInvalid.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    addChoice(event){
        const choices = this.state.choices.slice();
        this.setState({
            choices : choices.concat([{
                text:''
            }])
        });
    }

    removeChoice(choiceNumber){
        const choices = this.state.choices.slice();
        this.setState({
            choices: [...choices.slice(0, choiceNumber), ...choices.slice(choiceNumber+1)]
        });
    }

    handleQuestionChange(event){
        const value = event.target.value;
        this.setState({
            question:{
                text: value,
                ...this.validateQuestion(value)
            }
        });
    }

    handleChoiceChange(event,index){
        const value = event.target.value;
        const choices = this.state.choices.slice();

        choices[index] = {
            text: value,
            ...this.validateChoice(value)
        }

        this.setState({
            choices: choices
        })
    }

    handleSubmit(event){
        console.log(event);
        const pollData = {
            question: this.state.question.text,
            choices: this.state.choices.map(choice=>{
                return {text: choice.text}
            })
        }
        console.log(pollData);
        // createPoll(pollData)
        // .then()
        // .catch();

    }

    validateQuestion = (questionText) => {
        if(questionText.length === 0){
            return {
                validateStatus: 'error',
                errorMsg: 'Please enter your question!'
            }
        } else if (questionText.length > POLL_QUESTION_MAX_LENGTH){
            return {
                validateStatus: 'error',
                errorMsg: 'Question is too long!'
            }
        }
        else {
            return {
                validateStatus: 'success',
                errorMsg: null
            }
        }
    }

    validateChoice = (choiceText) =>{
        if(choiceText.length === 0) {
            return {
                validateStatus: 'error',
                errorMsg: 'Please enter a choice!'
            }
        } else if (choiceText.length > POLL_CHOICE_MAX_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `Choice is too long (Maximum ${POLL_CHOICE_MAX_LENGTH} characters allowed)`
            }    
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null
            }
        }
    }

    isFormInvalid(){
        if(this.state.question.validateStatus !== 'success') {
            return true;
        }
    
        for(let i = 0; i < this.state.choices.length; i++) {
            const choice = this.state.choices[i];            
            if(choice.validateStatus !== 'success') {
                return true;
            }
        }
    }

    render(){
        const choiceViews = [];
        this.state.choices.forEach((choice, index) => {
            choiceViews.push(<PollChoice 
                                key={index}
                                choice={choice}
                                choiceNumber={index}
                                removeChoice={this.removeChoice}
                                handleChoiceChange={this.handleChoiceChange}
                            />);
        });

        return (
            <div className = "new-poll-container" >
                <h1 className="page-title">Create Poll</h1>
                <div className="new-poll-content">
                <Form onFinish={this.handleSubmit} className="create-poll-form">
                        <FormItem validateStatus={this.state.question.validateStatus}
                            help={this.state.question.errorMsg} className="poll-form-row">
                            <Input
                                placeholder="Enter your Question"
                                style ={{fontSize: '16px'}}
                                autosize={{minRows:3, maxRows: 6}}
                                name="question"
                                value = {this.state.question.text}
                                onChange = {this.handleQuestionChange}
                            />
                        </FormItem>
                        {choiceViews}
                        <FormItem className="poll-form-row">
                            <Button type="primary" onClick={this.addChoice} disabled={this.state.choices.length === MAX_CHOICES}>
                                    Add a choice
                            </Button>
                        </FormItem>
                        <FormItem className="poll-form-row">
                            <Button type="primary" 
                                htmlType="submit" 
                                size="large" 
                                disabled={this.isFormInvalid()}
                            className="create-poll-form-button">Create Poll</Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}

function PollChoice(props) {
    return (
        <FormItem validateStatus={props.choice.validateStatus}
        help={props.choice.errorMsg} className="poll-form-row">
            <Input 
                placeholder = {'Choice ' + (props.choiceNumber + 1)}
                size="large"
                value={props.choice.text} 
                className={ props.choiceNumber > 1 ? "optional-choice": null}
                onChange={(event) => props.handleChoiceChange(event, props.choiceNumber)} />

            {
                props.choiceNumber > 1 ? (
                    <div onClick={() => props.removeChoice(props.choiceNumber)}>remove icon</div>
                ): null
            }    
        </FormItem>
    );
}

export default NewPoll;


