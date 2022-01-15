import React, { useContext, useState } from 'react';
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
import MyInfoForm from '../MyInfoForm';

import {gql, useMutation } from '@apollo/client';
import Loading from '../../Util/Loading';
import ErrorMessage from '../../Util/ErrorMessage';


import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../Context/auth-context';


const Transition = React.forwardRef(function Transition(props, ref) {
  
  return <Slide direction="up" ref={ref} {...props} />;
});

const Update_mut = gql`
mutation (
  $_id:String!
  $email: String!
  $firstname: String!
  $lastname: String!
) {
  updateUser(
    _id: $_id
    email: $email
    firstname: $firstname
    lastname: $lastname
  ) {
  _id
  }
}
`;

export default function ButtonMySettings() {
  const history=useHistory()
  const [email, setEmail] = useState ('');
  const[lastname, setLastName]=useState('')
  const [emailError, setEmailError] = useState (false);
  const[firstname, setFirstName]=useState('')
  const [emailColor, setEmailColor] = useState ('primary');
  const [helperEmail, setHelperEmail] = useState("");
  const[lastNameError,setLastNameError]=useState(false)
  const[firstNametError,setFirstNameError]=useState(false)
  const [update]=useMutation(Update_mut)
 
   const handleEmailChange=(e)=>{
    setEmail(e)
    if(e==="" || !e.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
      setEmailError(true)
      setHelperEmail("Insert a valid email format [*@.*]");
      
    }
    else{
      setEmailError(false)
      setHelperEmail("");
      setEmailColor('success')
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFirstNameError(false);
    setLastNameError(false);
    setEmailError(false);
   

  

    if(email === '') {
      setEmailError(true)
      setHelperEmail('This field is empty')
    }

  

   

   const {data,loading,error}= await  update(
     {
       variables:{
        _id:context.auth,
        email:email,
       lastname:lastname,
       firstname:firstname
     },
    }
    )
    if (loading) return <Loading/>
    if (error) return <ErrorMessage/> 
    
  if(data){
   
    history.push("/myprofile")
      history.go(+1)
      window.location.reload(false);
  }
  
  }




  

   
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    
 
const context =useContext(AuthContext)
 
 

  return (
    <div>
      <Button variant="outlined" startIcon={<EditIcon />} sx={{width: "100%" }} onClick={handleClickOpen}>
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
                            First name
                            </Typography>
                            <Typography variant="h5" gutterBottom component="div" style={{borderBottom: "1px solid #ffffff"}} sx={{py:2}}>
                           {firstname}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body2" gutterBottom component="div">
                            Last Name
                            </Typography>
                            <Typography variant="h5" gutterBottom component="div" style={{borderBottom: "1px solid #ffffff"}} sx={{py:2}}>
                            {lastname}
                            </Typography>
                            
                        </div>
                        <div>
                            <Typography variant="body2" gutterBottom component="div">
                            Email address
                            </Typography>
                            <Typography variant="h5" gutterBottom component="div" style={{borderBottom: "1px solid #ffffff"}} sx={{py:2}}>
                            {email}
                            </Typography>
                            
                        </div>
                    </Box>
                

                </Grid>
                { /** Voici la partie pour updater le profil de l'user connecté */}
                <Grid item xs={12} sm={12} md={4} sx={{mb: 1,  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <List component="form" onSubmit={handleSubmit} sx={{width: "80%"}}>
                    
                        <ListItem disablePadding sx={{mb:1}}>
                            <ListItemText sx={{color: "primary.main", mt:3 }} primary="Update your settings here"/>
                        </ListItem>
                    <Divider sx={{mb:3}}/>
                    <ListItem >
                    <TextField
                      sx={{width:"100%"}}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                     
                      }}
                      autoComplete="given-name"
                      name="firstName"
                      value={firstname}
                      required
                      fullWidth
                      id="firstNameNew"
                      label="First Name"
                      autoFocus
                    />
                    </ListItem>
                    
                    <ListItem>
                    <TextField
                    sx={{width:"100%"}}
                    onChange={(e) => {
                      setLastName(e.target.value);
             
                    }}
                      required
                      fullWidth
                      id="lastNameNew"
                      label="Last Name"
                      name="lastName"
                      value={lastname}
                      autoComplete="family-name"
                    />
                    </ListItem>
                    
                    <ListItem>
                    <TextField
                    sx={{width:"100%"}}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    required
                    fullWidth
                    value={email}
                    id="emailNew"
                    label="Email Address"
                    error={emailError}
                    name="email"
                    color={emailColor}
                    autoComplete="email"
                    helperText= {helperEmail}
                    />
                    </ListItem>
                    <ListItem>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{bgcolor: "primary.main", width:"100%" }}
                            onClick={handleSubmit}
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
