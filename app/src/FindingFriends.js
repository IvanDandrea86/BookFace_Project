import React from 'react';
import AddFriendCard from './AddFriendCard';
import ButtonAddCard from './ButtonAddCard';
import ButtonFriendCard from './ButtonFriendCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function FindingFriends() {
    return (
        <Box sx={{ width: "90%", flexGrow: 1, mx: "auto", my:6 }}>
        <Grid container spacing={0.5}>
            <Grid item xs={12} sm={4} md={3} sx={{mb: 1,  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <AddFriendCard bouton={<ButtonFriendCard/>}/>
            </Grid>
            <Grid item xs={12} sm={4} md={3} sx={{mb: 1,  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <AddFriendCard bouton={<ButtonAddCard/>}/>
            </Grid>
            <Grid item xs={12} sm={4} md={3} sx={{mb: 1,  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <AddFriendCard bouton={<ButtonAddCard/>}/>
            </Grid>
            <Grid item xs={12} sm={4} md={3} sx={{mb: 1,  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <AddFriendCard bouton={<ButtonFriendCard/>}/>
            </Grid>
            <Grid item xs={12} sm={4} md={3} sx={{mb: 1,  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <AddFriendCard bouton={<ButtonFriendCard/>}/>
            </Grid>
            <Grid item xs={12} sm={4} md={3} sx={{mb: 1,  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <AddFriendCard bouton={<ButtonAddCard/>}/>
            </Grid>
            <Grid item xs={12} sm={4} md={3} sx={{mb: 1,  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <AddFriendCard bouton={<ButtonFriendCard/>}/>
            </Grid>
            <Grid item xs={12} sm={4} md={3} sx={{mb: 1,  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <AddFriendCard bouton={<ButtonFriendCard/>}/>
            </Grid>
        </Grid>
        </Box>
        
    )
}

export default FindingFriends
