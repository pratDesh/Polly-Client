import React, { Component } from 'react';
import {createPoll} from '../utils/APIUtils';

import {Form, Input, Button, Icon, Select} from 'bootstrap';
import {MAX_CHOICES, POLL_QUESTION_MAX_LENGTH} from '../constants/constants';

// const Option = Select.Option;
const FormItem = Form;
// const { TextArea } = Input

class Tryfile extends Component{
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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.isFormValid = this.isFormValid.bind(this);

    }

    addChoice(event){
        const choices = this.state.choices.slice();
        this.setState({
            choices : choices.push([{
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
                ...this.validateQuestion()
            }
        });
    }

    handleChoiceChange(event){

    }

    handleSubmit(event){
        event.preventDefault();
        const pollData = {
            question: this.state.question.text,
            choices: this.state.choices.map(choice=>{
                return {text: choice.text}
            })
        }

        createPoll(pollData)
        .then()
        .catch();

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
        
    }

    isFormValid(){

    }

    render(){
        const choiceViews = [];
        // this.state.choices.forEach((choice, index) => {
        //     choiceViews.push(<PollChoice key={index} choice={choice} choiceNumber={index} removeChoice={this.removeChoice} handleChoiceChange={this.handleChoiceChange}/>);
        // });

        return(
            <div>New Poll here??</div>
        );

        // return (
        //     <div className = "new-poll-container">
        //         <h1 className="page-title">Create Poll</h1>
        //         <Form onSubmit={this.handleSubmit} className="create-poll-form">
        //             <FormItem validateStatus= {this.state.question.validateStatus}>
        //                 <Input
        //                     placeholder="Enter your Question"
        //                     style ={{fontSize: '16px'}}
        //                     autosize={{minRows:3, maxRows: 6}}
        //                     name="question"
        //                     value = {this.state.question.text}
        //                     onChange = {this.handleChoiceChange}
        //                 />
        //             </FormItem>

        //             {choiceViews}

        //             <FormItem className="poll-form-row">
        //                 <Button type="dashed" onClick={this.addChoice} disabled={this.state.choices.length === MAX_CHOICES}>
        //                     <Icon type="plus" /> Add a choice
        //                 </Button>
        //             </FormItem>
        //             <FormItem className="poll-form-row">
        //                     <Button type="primary" 
        //                         htmlType="submit" 
        //                         size="large" 
        //                         disabled={!this.isFormValid()}
        //                         className="create-poll-form-button">Create Poll</Button>
        //                 </FormItem>
        //         </Form> 

        //     </div>
        // );
    }
}

export default Tryfile;



