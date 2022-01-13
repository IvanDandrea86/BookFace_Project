import * as React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonStory from './Buttons/ButtonStory';
import ButtonMySettings from './Buttons/ButtonMySettings';

import { useQuery,gql } from '@apollo/client';
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

export default function ProfilePicture() {
    const user=Auth();
  const {
        data,
        loading,
        error
      } =useQuery(GETUSERINFO,{
          variables:{
              user_id:user.id
          }
      })
        if (loading) return <Loading />;
        if (error) return <ErrorMessage />;
        if (!data) return <p>Not found</p>;  
    

  return (
    <Box sx={{ width: "80%", flexGrow: 1, mx: "auto" }}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4} sx={{mb: 1,  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                {/** Photo profil + icon camera */}
                <Badge sx={{ my: 4, mx: "auto"}} overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        badgeContent={
                    <Avatar sx={{ m: 2, bgcolor: 'primary.main', width: 28, height: 28, justify: "center", mx: "auto"}}>
                        <CameraAltIcon  sx={{width: 16, height: "auto", justify: "center"}} />
                    </Avatar>}>
                    <Avatar sx={{width: 150, height: 150, justify: "center"}} alt="Paul" src="https://source.unsplash.com/random" />
                </Badge>
            </Grid>

            <Grid item xs={12} sm={12} md={8} sx={{mb: 1,  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                {/** Nom user + buttons pour poster et updater profil */}
                <Typography variant="h3" gutterBottom component="div" sx={{ml: 1, justify: "left"}}>
<<<<<<< HEAD:app/src/MyProfilePicture.js
        
=======
                  {data.findUserById.firstname}

                  {data.findUserById.lastname}
>>>>>>> c078bf2672be336db8092153bf70d8ff1f5c3cca:app/src/Component/MyProfilePicture.js
                </Typography>
             
                
                 <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} md={6}>
                        <ButtonStory/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <ButtonMySettings />
                    </Grid>
                </Grid>
              
            </Grid>
        
        </Grid>
    </Box>
    
  );
}
