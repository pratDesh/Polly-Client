import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { Container } from '@material-ui/core';

export default function UserInfo(props){
    return(
        <div className='user-info'>
                    <div className='user-photo' />
                    <Avatar>H</Avatar>
                    <span>
                    Ramu kaka . 14m ago
                    </span>
                    {/* <span>
                    Expert memer
                    </span> */}
        </div>
    );
}