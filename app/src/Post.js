import { Avatar, makeStyles } from '@mui/material';
import React from 'react'
import './Post.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AddCommentIcon from '@mui/icons-material/AddComment';
import SendIcon from '@mui/icons-material/Send';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';




function Post({ profilePic, image, username, timestamp, message }) 
{
    return (
        <Grid 
        container
         direction="column" 
         alignItems="center" 
         justify="center"
         style={{minWidth:"50vh"}}
         >

             
        <Grid item xs={12} sm={12} >
        <div className='post'>
        
            <div className="post_top">
                <Avatar src={profilePic}
                    className="post_avatar" />
                <div className="post_topInfo">
                    <h3>{username}</h3>
                    <p>Timestamp...</p>
                </div>
                
            </div>
        
          
            <div className="post_bottom">
                <p>{message}</p>
            </div>

            <div className="post_image">
                <img src={image} alt="" />
            </div>

         
            <div className="post_options">
    
                <div className="post_option">
                    <ThumbUpIcon style={{ color: "gray" }} />
                    <p>Like</p>
                </div>
       


                <div className="post_option">
                    <AddCommentIcon style={{ color: "gray" }} />
                    <p>Comment</p>
                </div>


                <div className="post_option">
                    <SendIcon style={{ color: "gray" }} />
                    <p>Share</p>
                </div>

                <div className="post_option">
                <Avatar src={profilePic} />
                    <ExpandMoreIcon style={{ color: "gray" }} />
                </div>
            </div>
        </div>
        </Grid>
        </Grid>
    );
}

export default Post;
