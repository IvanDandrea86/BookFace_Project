import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import './MessageSender.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AddCommentIcon from '@mui/icons-material/AddComment';
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


function MessageSender() {
    // e.preventDefault() to prevent for refreshing after each post

    const [input, setInput] =useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        // some clever db stuff
        
        setInput("");
        setImageUrl("");
    };

    return (
        <Grid container direction="row" alignItems="center" justify="center">
        <Grid item xs={12} sm={12} lg={10}>
        <div className='messageSender'>
            <div className="messageSender_top">
                <Avatar src='https://source.unsplash.com/random' />
                <form xs= {{mb: 1,  display: 'flex', flexDirection: 'row', justifyContent: 'end', alignItems: 'center', flexwrap: 'wrap'}}>
                    <input 
                    value={input}
                    onChange={(e) => setInput (e.target.value)}
                    className='messageSender_input' placeholder={"What's on your mind?"}
                    />
                    <input
                    value={imageUrl}
                    onChange={e => setImageUrl (e.target.value)}
                    placeholder='image URL (Optional)' />
                    <button onClick={handleSubmit} type="submit"> Post </button>
                </form>
            </div>
        </div>
        </Grid> 
        </Grid>
        
    );
}

export default MessageSender;
