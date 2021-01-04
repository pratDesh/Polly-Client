import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { Container } from '@material-ui/core';
import {getAvatarColor} from '../utils/UserColorUtil';

export default function UserInfo(props){
    const name = "Rami1";

    return(
        <div>
            <Avatar className="poll-creator-avatar" 
                style={{ backgroundColor: getAvatarColor(name)}} >
            </Avatar>
            <span className="poll-creator-name">
                Ramu kaka
            </span>
            <span className="poll-creator-username">
                @ramulal
            </span>
            <span className="poll-creation-date">
                14 min ago
            </span>
        </div>          

        // <div className='user-info'>
        //             <div className='user-photo' />
        //             <Avatar>H</Avatar>
        //             <span>
        //             Ramu kaka . 14m ago
        //             </span>
        //             {/* <span>
        //             Expert memer
        //             </span> */}
        // </div>
    );
}