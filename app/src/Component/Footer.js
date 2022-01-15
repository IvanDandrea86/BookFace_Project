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
        <Box className="myfooter"  >
            <Box color="#FFFFFF" sx={{ bgcolor: 'primary.main', p: 2, position:"absolute", bottom:0, width:"100%" }} component="footer">
                <Copyright />
                <Typography sx={{ mt:2}} color="#FFFFFF" variant="body2" align="center" href="https://picsum.photos/">Thanks to picsum.photos</Typography>
            </Box>
        </Box>
    )
}

