import React from 'react';
import UserPost from './Post';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import dayjs from 'dayjs'





 function MyPosts({data,post}) {

    
  

    return (
        
       
        <Container className = 'myPosts'
        sx = {
            { display: 'flex', flexDirection: 'column', justifyContent: 'center' } } >

    {data.findPostByUser.map((val)=>(
        <Grid item className = "post_container"
        sx = {
            { my: 0.5 } } > { /*REELS?*/ }
        < UserPost 
            profilePic = "https://picsum.photos/id/1025/300/300"
            message={val.content}
            timestamp={dayjs(data.findUserById.createdAt).format('DD MMMM YYYY, hh:mm:ss A')}
            firstname= {data.findUserById.firstname}
            lastname= {data.findUserById.lastname}
            postID={val._id}
     
        /> 
        </Grid>
    ))}

        </Container>
    );
}

export default MyPosts;