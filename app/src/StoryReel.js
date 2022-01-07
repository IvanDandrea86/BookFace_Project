import React from 'react';
import Story from './Story';
import './StoryReel.css';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function StoryReel() {

    return (
        <Grid container 
        alignItems="center" 
        justify="center"
        style={{minWidth:"50vh"}}
       >
        <Grid item xs={12} sm={12} lg={10}>
        <div className='storyReel'>
            <Story 
            profileSrc="https://scontent.fbru1-1.fna.fbcdn.net/v/t1.6435-9/93305513_10222305703541686_8570343274772955136_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=wFkrtIqhl64AX93_Sgk&_nc_ht=scontent.fbru1-1.fna&oh=00_AT_ipbk0Wc26bdv340MKC9fMG6bQQCcasFUkrPPU7_RnGg&oe=61FB46BA"
            image="https://images.unsplash.com/photo-1633329128338-42096105a4a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1846&q=80"
            title="User Name"
        />
        <Story
            profileSrc="https://scontent.fbru1-1.fna.fbcdn.net/v/t1.6435-9/93305513_10222305703541686_8570343274772955136_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=wFkrtIqhl64AX93_Sgk&_nc_ht=scontent.fbru1-1.fna&oh=00_AT_ipbk0Wc26bdv340MKC9fMG6bQQCcasFUkrPPU7_RnGg&oe=61FB46BA"
            image="https://images.unsplash.com/photo-1633329128338-42096105a4a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1846&q=80"
            title="Clara Climent"
        />
        <Story
            profileSrc="https://scontent.fbru1-1.fna.fbcdn.net/v/t1.6435-9/93305513_10222305703541686_8570343274772955136_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=wFkrtIqhl64AX93_Sgk&_nc_ht=scontent.fbru1-1.fna&oh=00_AT_ipbk0Wc26bdv340MKC9fMG6bQQCcasFUkrPPU7_RnGg&oe=61FB46BA"
            image="https://images.unsplash.com/photo-1633329128338-42096105a4a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1846&q=80"
            title="Samir Nacer"
        />
        <Story
            profileSrc="https://scontent.fbru1-1.fna.fbcdn.net/v/t1.6435-9/93305513_10222305703541686_8570343274772955136_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=wFkrtIqhl64AX93_Sgk&_nc_ht=scontent.fbru1-1.fna&oh=00_AT_ipbk0Wc26bdv340MKC9fMG6bQQCcasFUkrPPU7_RnGg&oe=61FB46BA"
            image="https://images.unsplash.com/photo-1633329128338-42096105a4a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1846&q=80"
            title="Ivan Dandrea"
        />
      
 
            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}
    </div>
    </Grid>
    </Grid>
    )
}

export default StoryReel
