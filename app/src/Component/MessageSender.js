import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import './MessageSender.css';
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
        <Container className='messageSender' item sx={{display: 'flex', justifyContent:"space-between", width:"100%", alignItems: 'center', flexwrap: 'wrap'}}>
                <Grid item sx={{justifyContent:"start"}}>
                <Avatar src='https://source.unsplash.com/random'  />
                </Grid>
                <form item sx= {{mb: 1,  display: 'flex', flexDirection: 'row', justifyContent: 'end', alignItems: 'center', flexwrap: 'wrap'}}>
                    <input 
                    sx={{display:"flex", flexwrap:"wrap"}}
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
        </Container>
        
    );
}

export default MessageSender;
