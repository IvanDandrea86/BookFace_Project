import { Avatar } from '@mui/material';
import React from 'react'
import './Post.css';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import ChatPost from './ChatPost';
import CommentPost from './CommentPost';


function Post({ profilePic, firstname,lastname, timestamp, message ,postID}) 
{
    const image= "https://picsum.photos/id/" + Math.floor(Math.random()*1000) + "/800/600/" 
    return (        
        <Grid container sx={{width: "100%", justifyContent: "center", alignItems: "center"}}>
            <div item className='post' sx={{width: "100%", flexDirection:"column", flexWrap:"wrap", justifyContent: "center", alignItems: "center"}} >
                <div className="post_top" sx={{flexDirection:"column", flexWrap:"wrap", justifyContent: "center"}}>
                    <Avatar src={profilePic}
                        className="post_avatar" />
                    <div className="post_topInfo">
                        <h3>{firstname} {lastname}</h3>
                        <p>{timestamp}</p>
                    </div>         
                </div>
                <div className="post_bottom" sx={{display: "flex", flexDirection:"column", flexWrap:"wrap", justifyContent: "center"}}>
                    <p>{message}</p>
                </div>
                <div className="post_image" sx={{width: "100%", flexWrap:"wrap", justifyContent: "end", flexDirection:"column"}}>
                    <img src={image} alt="" />
                </div>
              
                        <Divider />
                        <Grid container sx={{width:"100%", display: "flex", flexDirection:"column", justifyContent:"space-between", flexWrap:"nowrap"}}>

<Grid item sx={{ widht:"100%", display: "flex", justifyContent:"flex-start", flexDirection:"row", alignItems:"strech", width:"100%", flexWrap:"nowrap"}}>
    
    <CommentPost post={postID}/>
    
</Grid>
                    <Divider />

                        <Grid item sx={{ display: "flex", justifyContent:"flex-end", flexDirection:"row", alignItems:"strech", width:"100%"}}>
                        <ChatPost idpost={postID}/>

                            
                        </Grid>


                    </Grid> 

            </div>
        </Grid>

    );
}

export default Post;
