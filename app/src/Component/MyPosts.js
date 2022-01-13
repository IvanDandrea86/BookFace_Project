import React,{useContext,useState} from 'react';
import UserPost from './Post';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { useQuery, gql } from '@apollo/client';
import Loading from '../Util/Loading';
import ErrorMessage from '../Util/ErrorMessage'
import { AuthContext } from '../Context/auth-context';

const FINDBYID = gql `
query($user_id:String!) {
findUserById(user_id: $user_id){
        email
        lastname
        firstname
        createdAt
        friendList
        }
findPostByUser(user_id:$user_id)
{
    content
    createdAt
    comments
  }
}
`
 function MyPosts() {

    const context=useContext(AuthContext)
   
    const { loading, error, data } = useQuery(FINDBYID, {
        variables: {
            user_id: context.auth
        }
    });
    if (loading) return <Loading/> ;
    if (error) return <ErrorMessage/> ;
  
  

    

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