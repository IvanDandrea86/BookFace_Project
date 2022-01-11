import { Avatar } from '@mui/material';
import React from 'react';
import './SidebarRow.css';

function SidebarRow({ src, firstName, lastName}) {
    return (
        <div className='SidebarRow'>
            {src && <Avatar className='sidebar_avatar' src={src} />}
           <p> {firstName} </p>
           <p> {lastName} </p>
        </div>
    )
}

export default SidebarRow
