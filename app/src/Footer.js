import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

function Copyright(props) {
    return (
      <Typography color="#FFFFFF" variant="body2" align="center" {...props}>
        {'Copyright © '}
        <Link color="#FFFFFF" href="https://github.com/IvanDandrea86/BookFace_Project">
          Samir | Gizem | Ivan | Clara
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  export default  function Footer() {
    return (
        <div>
            <Box color="#FFFFFF" sx={{ bgcolor: 'primary.main', p: 2 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                Ici on a le footer
                </Typography>
                <Typography
                variant="subtitle1"
                align="center"
                color="inherit"
                component="p"
                >
                Réfléchir ce qui serait utile ici
                </Typography>
                <Copyright />
            </Box>
        </div>
    )
}

