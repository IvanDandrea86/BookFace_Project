import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Badge from '@mui/material/Badge';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';


export default function BannerProfile() {
  return (
    <div style={{ width: '100%'}}>

      <CssBaseline />
      <Box sx={{ display: 'flex', bgcolor: "primary.light", height: "200px", overflow: 'hidden', width: "100%"}}>
        <img src="https://source.unsplash.com/random" alt="banner_profile" style={{objectFit: 'cover', width: "100%"}}/>
      </Box>
    </div>
  );
}
