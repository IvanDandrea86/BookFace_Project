import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ApartmentIcon from '@mui/icons-material/Apartment';
import WorkIcon from '@mui/icons-material/Work';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';



export default function MyInfo() {
  const [country, setCountry] = useState ("Italy");
  const [job, setJob] = useState ("Developer");
  const [activities, setActivities] = useState ("Football");
  const [status, setStatus] = useState ("Married");
  
  
  return (
    <Box sx={{ width: '80%', bgcolor: 'background.paper', mx: "auto", mb: 1 }}>
     
      
      <nav aria-label="title">
      <Divider />
        <List>
          <ListItem disablePadding>
              <ListItemText primary="About me"/>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="personal info">
        <List>
          <ListItem disablePadding>
              <ListItemIcon>
                <ApartmentIcon />
              </ListItemIcon>
              <ListItemText primary={country} />
          </ListItem>
          <ListItem disablePadding>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary={job} />
          </ListItem>
          <ListItem disablePadding>
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText primary={status} />
          </ListItem>
          <ListItem disablePadding>
              <ListItemIcon>
                <SportsEsportsIcon />
              </ListItemIcon>
              <ListItemText primary={activities} />
          </ListItem>
        </List>
      </nav>
      <Divider />
    </Box>
  );
}
