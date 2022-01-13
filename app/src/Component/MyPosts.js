import React from 'react';
import Post from './Post';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {useQuery,gql} from '@apollo/client';
import { Auth } from '../Util/isAuthApollo';
import Loading from '../Util/Loading';
import ErrorMessage from '../Util/ErrorMessage';

const GETUSERINFO=gql`
query($user_id:String!)
{findUserById(user_id:$user_id)
{lastname
firstname
friendList
}}
`

const GETUSERPOSTS=gql`
query($user_id:String!)
{findPostByUser(user_id:$user_id)
{_id
content
createdAt
}}
`

function MyPosts() {

    const user=Auth();


    const {
          data,
          loading,
          error
        } =useQuery(GETUSERPOSTS,{
            variables:{
                user_id:user.id
            }
        })
          if (loading) return <Loading />;
          if (error) return <ErrorMessage />;
          if (!data) return <p>Not found</p>;  

    const photo = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";

    return (
    <Container className='myPosts' sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', mb:6 }}>  
       
        {data.findPostByUser.map((val)=>(
        <Grid item className="post_container" sx={{my: 6 }}>
            {/*REELS?*/}

        <Post 
            profilePic="https://source.unsplash.com/random"
            message={val.content}
            timestamp={val.createdAt}
            username= {val._id}
            image= {photo}           
        /> 
        </Grid>
         ))}
    </Container>
    );
}

export default MyPosts;
