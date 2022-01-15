import React from 'react';
import { Avatar } from '@mui/material';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';

function OneComment() {
    return (
        <div className="post_top" sx={{flexDirection:"column", flexWrap:"wrap", justifyContent: "center"}}>
                    <Avatar src={"https://picsum.photos/id/" + Math.floor(Math.random()*1000) + "/800/600/"}
                        className="post_avatar" />
                    <div className="post_topInfo">
                        <h3>First name + Last Name</h3>
                        <p>Publicasion date</p>
                    </div>         
                </div>
    )
}

export default OneComment
