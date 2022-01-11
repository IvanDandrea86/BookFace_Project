import * as React from 'react';
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
import UserConnected from './UserConnected';


export default function MyInfo() {
  return (
    <Box sx={{ width: '80%', bgcolor: 'background.paper', mx: "auto" }}>
     
      
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
              <ListItemText primary={UserConnected.country} />
          </ListItem>
          <ListItem disablePadding>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary={UserConnected.job} />
          </ListItem>
          <ListItem disablePadding>
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText primary={UserConnected.status} />
          </ListItem>
          <ListItem disablePadding>
              <ListItemIcon>
                <SportsEsportsIcon />
              </ListItemIcon>
              <ListItemText primary={UserConnected.activities} />
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
