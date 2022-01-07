import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import UserConnected from './UserConnected';
import MyInfoForm from './MyInfoForm';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ButtonMySettings() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  //ici vont les variables avec les données
  const [firstName, setFirstName] = useState (UserConnected.firstName);
  const [errorFirstName, setErrorFirstName] = useState (false);
  const [lastName, setLastName] = useState (UserConnected.lastName);
  const [errorLastName, setErrorLastName] = useState (false);
  const [email, setEmail] = useState (UserConnected.email);
  const [errorEmail, setErrorEmail] = useState (false);
  const [password, setPassword] = useState (UserConnected.password);
  const [errorPassword, setErrorPassword] = useState (false);
  const [passwordAgain, setPasswordAgain] = useState (UserConnected.password);
  const [errorPasswordAgain, setErrorPasswordAgain] = useState (false);


  //On update les données du user
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorFirstName(false);
    setErrorLastName(false);
    setErrorEmail(false);
    setErrorPassword(false);
    setErrorPasswordAgain(false);


    if(firstName === '') {
        setErrorFirstName(true);
    }
    if(lastName === '') {
        setErrorLastName(true);
    }
    if(email === '') {
        setErrorEmail(true);
    }
    if(password === '') {
        setErrorPassword(true);
    }

    if(password === '') {
        setErrorPasswordAgain(true);
    }

    if(!(password === passwordAgain)) {
        setErrorPassword(true);
        setErrorPasswordAgain(true);
    }

  };

  return (
    <div>
      <Button variant="outlined" startIcon={<EditIcon />} sx={{mb:0.5, width: "100%" }} onClick={handleClickOpen}>
        My Settings
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              My profile - Settings
            </Typography>
            <Button autoFocus color="inherit" noValidate onClick={handleClose}>
              close
            </Button>
          </Toolbar>
        </AppBar>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={8} sx={{p: 3, bgcolor: "primary.light", color: "#FFFFFF",  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Box sx={{ height: '100%', width: "80%", justifyContent: "space-around", display: 'flex', flexDirection: 'column', alignContent: 'space-around'}}>
                        <div>
                            <Typography sx={{mt: 3}} variant="body2" gutterBottom component="div">
                            First Name
                            </Typography>
                            <Typography variant="h5" gutterBottom component="div" style={{borderBottom: "1px solid #ffffff"}} sx={{py:2}}>
                                {UserConnected.firstName}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body2" gutterBottom component="div">
                            Last Name
                            </Typography>
                            <Typography variant="h5" gutterBottom component="div" style={{borderBottom: "1px solid #ffffff"}} sx={{py:2}}>
                                {UserConnected.lastName}
                            </Typography>
                            
                        </div>
                        <div>
                            <Typography variant="body2" gutterBottom component="div">
                            Email Address
                            </Typography>
                            <Typography variant="h5" gutterBottom component="div" style={{borderBottom: "1px solid #ffffff"}} sx={{py:2}}>
                                {UserConnected.email}
                            </Typography>
                            
                        </div>
                    </Box>
                

                </Grid>
                <Grid item xs={12} sm={12} md={4} sx={{mb: 1,  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <List component="form" onSubmit={handleSubmit} sx={{width: "80%"}}>
                    
                        <ListItem disablePadding sx={{mb:1}}>
                            <ListItemText sx={{color: "primary.main", mt:3 }} primary="Tell us about more about you"/>
                        </ListItem>
                    <Divider sx={{mb:3}}/>
                    <ListItem >
                    <TextField
                    sx={{width:"100%"}}
                    onChange={(e) => {
                        setFirstName(e.target.value);
                        UserConnected.firstName = e.target.value;
                        }}
                    defaultValue={UserConnected.firstName}
                    label="First Name"
                    variant="standard"
                    error={errorFirstName}
                    />
                    </ListItem>
                    
                    <ListItem>
                    <TextField
                    sx={{width:"100%"}}
                    onChange={(e) => {
                        setLastName(e.target.value);
                        UserConnected.lastName = e.target.value;
                        }}
                    defaultValue={UserConnected.lastName}
                    label="Last Name"
                    variant="standard"
                    error={errorLastName}
                    />
                    </ListItem>
                    
                    <ListItem>
                    <TextField
                    sx={{width:"100%"}}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        UserConnected.email = e.target.value;
                        }}
                    defaultValue={UserConnected.email}
                    label="Email address"
                    variant="standard"
                    error={errorEmail}
                    />
                    </ListItem>

                    <ListItem>
                    <TextField
                    sx={{width:"100%"}}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        }}
                    defaultValue={UserConnected.password}
                    label="New password"
                    variant="standard"
                    error={errorPassword}
                    />
                    </ListItem>
                    <ListItem>
                    <TextField
                    sx={{width:"100%"}}
                    onChange={(e) => {
                        setPasswordAgain(e.target.value);
                        }}
                    defaultValue={UserConnected.password}
                    label="Repeat new password"
                    variant="standard"
                    error={errorPasswordAgain}
                    />
                    </ListItem>
                    <ListItem>
                        <Button

                            type="submit"
                            variant="contained"
                            sx={{bgcolor: "primary.main", width:"100%" }}
                             >
                            Save changes
                            </Button>
                        </ListItem>
                    </List>
                </Grid>
                
            </Grid>
        <Divider />
        <MyInfoForm />
      </Dialog>
    </div>
  );
}
