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
import MyInfoForm from '../MyInfoForm';

import { useQuery,gql } from '@apollo/client';
import Loading from '../../Util/Loading';
import ErrorMessage from '../../Util/ErrorMessage';
import { Auth } from '../../Util/isAuthApollo';
import { useHistory } from 'react-router-dom';

// Query pour obtenir et afficher les infos de l'user connecté
const GETUSERINFO=gql`
query($user_id:String!)
{findUserById(user_id:$user_id)
{lastname
firstname
email
}}
`

// Query pour updater les infos de l'user connecté
// const UPDATE_MUT =gql`
// mutation (,$_id:String!,$firstname:String!,$lastname:String!,$email:String! ){
//   updateUser( _id: $_id , firstname: $firstname, lastname: $lastname, email: $email){
//     _id
//     firstname
//     lastname
//     email
//     password
//     }
//   }
// }
// `;




const Transition = React.forwardRef(function Transition(props, ref) {
  

  return <Slide direction="up" ref={ref} {...props} />;
});



export default function ButtonMySettings() {


  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [confirmPassword, setConfirmPassword] = useState ('');
  const[lastname, setLastName]=useState('')
  const [emailError, setEmailError] = useState (false);
  const[firstname, setFirstName]=useState('')
  const [passwordError, setPasswordError] = useState (false);
  const [confirmPasswordError, setConfirmPasswordError] = useState (false);
  const [passwordColor, setPasswordColor] = useState ('primary');
  const [emailColor, setEmailColor] = useState ('primary');
  const [confirmPasswordColor, setConfirmPasswordColor] = useState ('primary');
  const [helperPass, setHelperPass] = useState("");
  const [helperEmail, setHelperEmail] = useState("");
  const [helperConfirmPass, setHelperConfirmPass] = useState("");
  const history = useHistory();


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

  const handlePasswordChange=(e)=>{
    setPassword(e)
    if(e==="" || !e.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)){
      setPasswordError(true)
      setHelperPass(
        "Password must be at least 8,contain at leat one digit, one uppercase and one lowercase character"
      );
    }
    else{
      setPasswordError(false)
      setHelperPass(
      "");
      setPasswordColor('success')
    }
  }



  const handlePasswordConfirmChange=(e,password)=>{
    setConfirmPassword(e)
    if(e===''){
      setConfirmPasswordError(true)
       setHelperPass(
        "Password must be at least 8,contain at leat one digit, one uppercase and one lowercase character"
      );
    }
    else if(e!==password) {
      setConfirmPasswordError(true)
      setHelperConfirmPass(
        "Passwords must be the same ");
      
    }
    else {
      setConfirmPasswordError(false)
      setHelperConfirmPass(
      " ");
      setConfirmPasswordColor('success')  
    }
  }

   
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    
  //On update les données du user
  const handleSubmit = (event) => {
    event.preventDefault();

  };


  const user=Auth();
  const {
        data,
        loading,
        error
      } =useQuery(GETUSERINFO,{
          variables:{
              user_id:user.id
          }
      })
        if (loading) return <Loading />;
        if (error) return <ErrorMessage />;
        if (!data) return <p>Not found</p>; 

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
                            First name
                            </Typography>
                            <Typography variant="h5" gutterBottom component="div" style={{borderBottom: "1px solid #ffffff"}} sx={{py:2}}>
                            {data.findUserById.firstname}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body2" gutterBottom component="div">
                            Last Name
                            </Typography>
                            <Typography variant="h5" gutterBottom component="div" style={{borderBottom: "1px solid #ffffff"}} sx={{py:2}}>
                            {data.findUserById.lastname}
                            </Typography>
                            
                        </div>
                        <div>
                            <Typography variant="body2" gutterBottom component="div">
                            Email address
                            </Typography>
                            <Typography variant="h5" gutterBottom component="div" style={{borderBottom: "1px solid #ffffff"}} sx={{py:2}}>
                            {data.findUserById.email}
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
                        // setFirstNameError(false);}
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
                      // setLastNameError(false);
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
                    <TextField
                    sx={{width:"100%"}}
                    onChange={(e) => handlePasswordChange(e.target.value)}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    value={password}
                    id="passwordNewConfirm"
                    error={passwordError}
                    color={passwordColor}
                    autoComplete="new-password"
                    helperText= {helperPass}
                    />
                    </ListItem>
                    <ListItem>
                    <TextField
                    sx={{width:"100%"}}
                    required
                    fullWidth
                    onChange={(e) => handlePasswordConfirmChange(e.target.value,password)}
                    name="password_confirm"
                    label="Confirm password"
                    type="password"
                    value={confirmPassword}
                    id="password_confirm"
                    error={confirmPasswordError}
                    autoComplete="new-password"
                    color={confirmPasswordColor}
                    helperText= {helperConfirmPass}
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
