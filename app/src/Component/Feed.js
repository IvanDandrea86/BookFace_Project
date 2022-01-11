import React from 'react';
import StoryReel from './StoryReel';
import Post from './Post';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Share from './Share';
import {useQuery,gql} from '@apollo/client';
import { Auth } from '../Util/isAuthApollo';
import Loading from '../Util/Loading';
import ErrorMessage from '../Util/ErrorMessage';

const FINDPOSTQUERY =gql `
  {findAllPost{
  content
  user_id
  _id
createdAt}
}
`;
const UserFriendList=gql`
query($user_id:String)
{findUserById(user_id:$user_id)
{lastname
firstname
friendList
}}
`




function Feed() {
    const user=Auth();
   console.log(typeof(user.id))
    const { loading, error, data } = useQuery(FINDPOSTQUERY);
    const {friends}=useQuery(UserFriendList,{
        variables:{
            user_id:user.id
        }
    })
    console.log(friends)
    if (loading) return <Loading />;
    if (error) return <ErrorMessage />;

    const photo = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";

    return (
    <Container className='feed' sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>  

        <Grid item className="post_container" sx={{my: 6}}>
                {/*REELS?*/}
        <StoryReel />
        </Grid>
       
            
        <Grid item className="post_container" sx={{my: 6}}>
            {/* POST MESSAGE */}
        <Share 
         profilePic="https://source.unsplash.com/random"
         timestamp='date'
         username= {user.id}
         image= {photo} 
        />

        </Grid>
       
        {data.findAllPost.map((val)=>(
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

export default Feed;
