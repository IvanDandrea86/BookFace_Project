import * as React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonAddFriend from './Buttons/ButtonAddFriend';
import ButtonSendMessage from './Buttons/ButtonSendMessage';
import ButtonStory from './Buttons/ButtonStory';
import ButtonMySettings from './Buttons/ButtonMySettings';



export default function ProfilePicture() {
   
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
              


                </Typography>  
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} md={6}>
                        <ButtonAddFriend />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <ButtonSendMessage />
                    </Grid>
                </Grid>
            </Grid>
        
        </Grid>
    </Box>
    
  );
}
