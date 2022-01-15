import React ,{useContext} from 'react';
import StoryReel from './StoryReel';
import PostProfile from './PostProfile';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Share from './Share';
import {useQuery,gql} from '@apollo/client';
import Loading from '../Util/Loading';
import ErrorMessage from '../Util/ErrorMessage';
import { AuthContext } from '../Context/auth-context';
import dayjs from 'dayjs'

const FINDPOSTQUERY =gql `
 query($user_id:String!) {
    findUserById(user_id:$user_id)
    {lastname
    firstname
    friendList
    createdAt  
    }
    findAllPost{
        user_id 
       content
       createdAt
    }
}
`
function Feed() {
    const context = useContext(AuthContext)
    const { loading, error, data } = useQuery(FINDPOSTQUERY,{
        variables:{
            user_id:context.auth
        }
    });
    if (loading) return <Loading />;
    if (error) return <ErrorMessage />;
    return (
    <Container className='feed' sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>  
        <Grid item className="post_container" sx={{my: 6}}>
        <StoryReel />
        </Grid>    
        <Grid item className="post_container" sx={{my: 6}}>
        <Share 
         profilePic="https://source.unsplash.com/random"
         timestamp='date'
         firstname= {data.findUserById.firstname}
         lastname= {data.findUserById.lastname}
         />
        </Grid>
        
        {data.findAllPost.filter((val)=>{
            return data.findUserById.friendList.includes(val.user_id)}).map(val =>
        (
        <Grid item className="post_container" sx={{my: 0.5 }}>
       <PostProfile
             message={val.content}
             timestamp={dayjs(val.createdAt).format('DD MMMM YYYY, hh:mm:ss A')}
             idpost= {val.user_id}            
        /> 
        </Grid>
        )     
        )
        }           
    </Container>
    );
      }
export default Feed;
