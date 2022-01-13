import React, {useState} from 'react'
import BannerProfile from '../../Component/Buttons/BannerProfile'
import MyInfo from '../../Component/MyInfo'
import ProfilePicture from '../../Component/ProfilePicture';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';


function Profile() {
    const {state}=useLocation()
   
    
   
    return (
        <Box className='profile'>
       
            {/** Ici ira le banner: pour le moment couleur/ on verra photo plus tard */}
            <BannerProfile  />
            {/** Photo de profil + picto photo + nom + buttons "add story" + "modify my profile" */}
            <ProfilePicture userid={state} />
            {/** Some general info of the guy with pictos */}
            <MyInfo />
            {/** Storys in chronogical order */}
            
        </Box>
    )
}

export default Profile
