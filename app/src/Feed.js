import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Test from './Test';

function Feed() {
    return (
    <Container /*maxWidth="xs"*/>  
    <div className='feed'>


        <Grid container> 
        <Grid item xs={12} sm={12}> 
        <StoryReel />
        </Grid>
        </Grid>

        <Grid container>
        <Grid item xs={12} sm={12} lg={10}>
        <MessageSender />
        </Grid>
        </Grid>
        
       
        <Grid container> 
        <Grid item xs={12} sm={12}> 
        <Post 
            profilePic="https://source.unsplash.com/random"
            message="Wow this works"
            timestamp="This is a timestamp"
            username= "John Doe"
            image= "https://image.freepik.com/photos-gratuite/gros-plan-belle-fleur-daisy-oxeye_181624-11106.jpg"          
        /> 
        </Grid>
        </Grid>
  

        <Grid container> 
        <Grid  items xs={12} sm={12} md={12}>
        <Post 
         profilePic="https://source.unsplash.com/random"
         message="What's Up BROO"
         username= "Someone Cool"
         /> 
         </Grid>
         </Grid>
  

         <Grid container> 
        <Grid item xs={12} sm={12}> 
        <Post 
        profilePic="https://source.unsplash.com/random"
        message="Heyooo Bookface !"
        username= "Interesting Guy"
        /> 
        </Grid>
        </Grid>
  
    
        
    </div>
    </Container>
    );
}

export default Feed;
