import React, {useState} from 'react'
import BannerProfile from '../../Component/Buttons/BannerProfile'
import MyInfo from '../../Component/MyInfo'
import ProfilePicture from '../../Component/ProfilePicture';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';
import UserPost from '../../Component/Post';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import dayjs from 'dayjs'
import {useQuery,gql} from '@apollo/client';
import Loading from '../../Util/Loading';
import ErrorMessage from '../../Util/ErrorMessage'

const SENDERIDENTITY =gql `
 query($user_id:String!) {
    findUserById(user_id:$user_id)
    {_id
    lastname
    firstname
    }
    findPostByUser(user_id:$user_id){
        content
        createdAt
        _id
    }
}
`;
function Profile() {
    const {state}=useLocation()
    console.log(state.users)
    const { loading, error, data } = useQuery(SENDERIDENTITY, {
        variables: {
            user_id: state.users
        }
        });
        if (loading) return <Loading/> ;
        if (error) return <ErrorMessage/> ;
   
    return (
        <Box className='profile'>
       
            {/** Ici ira le banner: pour le moment couleur/ on verra photo plus tard */}
            <BannerProfile  />
            {/** Photo de profil + picto photo + nom + buttons "add story" + "modify my profile" */}
            <ProfilePicture userid={state} />
            {/** Some general info of the guy with pictos */}
            <MyInfo />
            {/** Storys in chronogical order */}
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
        </Box>
    );
            
            
      

}

export default Profile
