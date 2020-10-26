import React, { Component } from 'react';
import { getPolls, castVote } from '../utils/APIUtils';

export class PollList extends Component {
    constructor(props){
        super(props);
        this.state = {
            polls = []
        }
        this.loadPolls = this.loadPolls.bind(this);
        this.handleVoteSubmit = this.handleVoteSubmit.bind(this);
    }

    loadPolls(){
        let promise;
        promise = getPolls(0,10);
        if(!promise){
            return;
        }
        promise.then(response => {
            this.setState({
                polls: polls.concat(response)
            });
        }).catch(error => {
            this.setState();
        });
    }

    handleVoteSubmit(event, pollIndex){
        event.preventDefault();

        const voteData = {
            pollId : poll.id,
            choiceId : selecetedChoice
        }

        castVote(voteData)
        .then(response => {
            
        })
        .catch(error => {

        })

    }

    componentDidMount(){
        this.loadPolls();
    }

    render(){
        const pollViews = [];
        this.state.polls.array.forEach((poll,pollIndex) => {
            pollViews.push(
                <Poll
                key={poll.id}
                poll = {poll}
                handleVoteSubmit = { (event) => this.handleVoteSubmit(event, pollIndex)}
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

