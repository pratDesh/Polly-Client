import React, { Component } from 'react';
import { getPolls, castVote } from '../utils/APIUtils';
import Poll from './Poll';

export class PollList extends Component {

    constructor(props){
        super(props);
        this.state = {
            polls: [] 
        };
        this.loadPolls = this.loadPolls.bind(this);
        this.handleChoiceSelected = this.handleChoiceSelected.bind(this);
    }

    loadPolls(){
        let promise;
        promise = getPolls(0,10);
        if(!promise){
            return;
        }
        
        promise
        .then(response =>{
            console.log(response);
            const polls = this.state.polls.slice();
            this.setState({
                polls: polls.concat(response)
            })
            console.log("This is response content ",this.state.polls);
        }).catch(error =>{

        });
        console.log(this.state.polls);
    }

    // handleVoteSubmit(event, pollIndex){
    //     event.preventDefault();

    //     const voteData = {
    //         pollId : poll.id,
    //         choiceId : selecetedChoice
    //     }

    //     castVote(voteData)
    //     .then(response => {
            
    //     })
    //     .catch(error => {

    //     })

    // }

    handleChoiceSelected(event,pollId){
        var userAnswer = event.currentTarget.value;
        // this.setState({
        //   answerSelected: userAnswer,
        //   isAnswered: true 
        // });
        // this.setUserAnswer(userAnswer);
        // if(this.state.questionId < quizQuestions.length){
        //   setTimeout(() => this.setNextQuestion(), 5000);
        // }else{
        //   //setTimeout(() => this.setResults(this.getResults()), 300);
        // }
    }

    componentDidMount(){
        this.loadPolls();
    }

    render(){
        const pollViews = [];
        this.state.polls.forEach((poll, pollIndex)=>{
            pollViews.push(
                <Poll 
                   key = {poll.id}
                   poll = {poll} 
                   handleChoiceSelected = {(event) => this.state.handleChoiceSelected(event,pollIndex)}
                />
            )
        });

        return(
            <div className="polls-container">
                {pollViews}
            </div>
        );
    }
} 

