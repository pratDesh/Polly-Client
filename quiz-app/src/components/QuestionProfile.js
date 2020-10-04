import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { Container } from '@material-ui/core';

export default function QuestionProfile(props){
    return(
        <div className='questionProfile'>
                    <div className='profilePhoto' />
                    <Avatar>H</Avatar>
                    <div>Ramu kaka . 14m ago</div>
                    <div>Expert memer</div>
        </div>
    );
}