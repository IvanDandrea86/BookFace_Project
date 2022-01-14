import { Avatar } from '@mui/material';
import React from 'react'
import './Post.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AddCommentIcon from '@mui/icons-material/AddComment';
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';



function Post({ profilePic, firstname,lastname, timestamp, message }) 
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

            
                    <Grid container sx={{width:"100%", display: "flex", flexDirection:"row", justifyContent:"space-between"}}>
                        <Grid item sx={{ ml:1, display: "flex", justifyContent:"flex-start", flexDirection:"row", alignItems:"center"}}>
                            <IconButton 
                            size="large" 
                            sx={{  m: 0.5, justifyContent: "center" }}
                            color = "primary">
                                <ThumbUpIcon  sx={{width: 16, height: "auto", justify: "center"}} />
                            </IconButton>
                            <IconButton  size="large" sx={{ bgcolor: "#dedede", m: 0.5, justifyContent: "center"}}>
                                <AddCommentIcon  sx={{width: 16, height: "auto", justify: "center"}} />
                            </IconButton>
                            <IconButton size="large"  sx={{ bgcolor: "#dedede", m: 0.5, justifyContent: "center"}}>
                                <SendIcon  sx={{width: 16, height: "auto", justify: "center"}} />
                            </IconButton>

                        </Grid>
                        <Grid item sx={{display: "flex", flexDirection:"row", flexWrap:"wrap", justifyContent: "flex-end"}}>
                            <Avatar src={profilePic} sx={{ m:2, }}/>
                        </Grid>
                    </Grid>

                
            </div>
        </Grid>

    );
}

export default Post;
