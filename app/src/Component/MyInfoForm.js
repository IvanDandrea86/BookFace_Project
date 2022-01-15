import React, { useState } from 'react';
import Button from '@mui/material/Button';
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

import PersonlStatus from './PersonalStatus';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

export default function MyInfoForm() {
    

    // Variables pour le changement de données
  const [country, setCountry] = useState ("Italy");
  const [job, setJob] = useState ("Developer");
  const [activities, setActivities] = useState ("Football");

  const handleSubmit = (event) => {
    event.preventDefault();

  };


  return (
    <Box sx={{ p: 3, width: '90%', mx: "auto" }}>
     
        <List>
          <ListItem disablePadding>
              <ListItemText sx={{color: "primary.main", mt:3 }} primary="Tell us about more about you"/>
          </ListItem>
        </List>
      <Divider />
      
      <Box component="form" noValidate onSubmit={handleSubmit} >
        <Grid container spacing={2} sx={{ mt: 3 }}>
                <Grid item xs={12} sm={12} md={3}>
                    <ListItem>
                        <ListItemIcon>
                            <ApartmentIcon />
                        </ListItemIcon>
                        <TextField
                            sx={{width:"100%"}}
                            onChange={(e) => {
                                setCountry(e.target.value);
;
                                }}
                            defaultValue={country}
                            label="Country"
                            variant="standard"
                            />
                    </ListItem>
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <ListItem >
                        <ListItemIcon>
                            <WorkIcon />
                        </ListItemIcon>
                        <TextField
                            sx={{width:"100%"}}
                            onChange={(e) => {
                                setJob(e.target.value);
                                }}
                            defaultValue={job}
                            label="Job"
                            variant="standard"
                            />
                    </ListItem>
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <ListItem >
                        <ListItemIcon>
                            <FavoriteIcon />
                        </ListItemIcon>
                        <PersonlStatus />
                    </ListItem>
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <ListItem >
                        <ListItemIcon>
                            <SportsEsportsIcon />
                        </ListItemIcon>
                        <TextField
                            sx={{width:"100%"}}
                            onChange={(e) => {
                                setActivities(e.target.value);
                          
                                }}
                            defaultValue={activities}
                            label="Activities"
                            variant="standard"
                            />
                    </ListItem>
                </Grid>
                
            </Grid>
            <Grid container sx={{ mt: 2, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Grid item xs={12} sm={12} md={6}>
                        <ListItem >
                            <Button
                            type="submit"
                            variant="contained"
                            sx={{bgcolor: "primary.main", width: "100%" }}>
                            Update personal info
                            </Button>
                        </ListItem>
                    </Grid>
            </Grid>
        </Box>
    </Box>
  );
}
