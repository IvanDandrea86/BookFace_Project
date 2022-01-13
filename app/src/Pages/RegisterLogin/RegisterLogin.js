import React from 'react';
import Login from '../../Component/Login/Login';
import SignUp from '../../Component/Signup/SignUp';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';




  

export default function Page_Login_Subscribe() {
    return (
        <div>
            <div className="welcome" sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justify: "center",
            my: 5
          }}>
                <Avatar sx={{ m: 2, bgcolor: 'info.dark', width: 50, height: 50, justify: "center", mx: "auto"}}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography  component="h1" variant="h4" sx={{ textAlign: 'center', color: 'primary.dark' }}>
                    Welcome to Bookface
                </Typography>
            </div>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Login />
                <SignUp />
            </Grid>
        </div>
    )
}
