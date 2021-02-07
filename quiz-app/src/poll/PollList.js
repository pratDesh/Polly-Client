import React, { Component } from 'react';
import { getPolls, castVote } from '../utils/APIUtils';
import Poll from './Poll';

export class PollList extends Component {

    constructor(props){
        super(props);
        this.state = {
            polls: [],
            isAnswered: false
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
            const polls = this.state.polls.slice();
            this.setState({
                polls: polls.concat(response)
            })
        }).catch(error =>{

        });
        console.log(this.state.polls);
    }

    handleChoiceSelected(event,pollId){
        const voteData = {
            id: pollId,
            choiceId:event
        }

        castVote(voteData).then(response =>{
            const polls = this.state.polls.slice();
            const pollIndex = polls.indexOf(polls.find(p => p.id === pollId));
            polls[pollIndex] = response;
            this.setState({
                polls: polls
            });
        }).catch(error => {
            alert("Error occured during voting");
        })
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
                   handleChoiceSelected = {(event) => this.handleChoiceSelected(event,poll.id)}
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

