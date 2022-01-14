import React from 'react';
import UserPost from './Post';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';




 function MyPosts({data}) {

    

    return (
        
       
        <Container className = 'myPosts'
        sx = {
            { display: 'flex', flexDirection: 'column', justifyContent: 'center', mb: 6 } } >

    {data.findPostByUser.map((val)=>(
        <Grid item className = "post_container"
        sx = {
            { my: 6 } } > { /*REELS?*/ }
        < UserPost profilePic = "https://source.unsplash.com/random"
        message={val.content}
        timestamp={data.findUserById.createdAt}
       firstname= {data.findUserById.firstname}
       lastname= {data.findUserById.lastname}
     
        /> 
        </Grid>
    ))}

        </Container>
    );
}

export default MyPosts;