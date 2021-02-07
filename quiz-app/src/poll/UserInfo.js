import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { Container } from '@material-ui/core';
import {getAvatarColor} from '../utils/UserColorUtil';

export default function UserInfo(props){
    return(
        <div>
            <Avatar className="poll-creator-avatar"
                    style={{backgroundColor: getAvatarColor(props.name)}}>
            </Avatar>
            <span className="poll-creator-name">
                  {props.name}
            </span>
            <span className="poll-creator-username">
                {props.username}
            </span>
            <span className="poll-creation-date">
                14 min ago
            </span>
        </div>

    );
}