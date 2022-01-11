import React from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Share from './Share';
import Message from './Message';




function Feed() {

    const photo = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";

    return (
    <Container className='feed' sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>  

        <Grid item className="post_container" sx={{my: 6}}>
        <StoryReel />
        </Grid>
    
       
      

        <Grid item className="post_container" sx={{my: 6}}>
        <Share 
         profilePic="https://source.unsplash.com/random"
         username= "John Doe"
         image= {photo} 
        />

        </Grid>

        <Grid item className="post_container" sx={{my: 6 }}>
        <Post 
            profilePic="https://source.unsplash.com/random"
            message="Wow this works"
            timestamp="This is a timestamp"
            username= "John Doe"
            image= {photo}          
        /> 
        

        <Post 
         profilePic="https://source.unsplash.com/random"
         message="What's Up BROO"
         username= "Someone Cool"
         /> 

        <Post 
        profilePic="https://source.unsplash.com/random"
        message="Heyooo Bookface !"
        username= "Interesting Guy"
        /> 
        </Grid>
    </Container>
    );
}

export default Feed;
