import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  useMutation,
  gql
} from "@apollo/client";
import { useHistory }from 'react-router-dom';




const theme = createTheme();

const REGISTER_MUT =gql`
mutation ($email:String!,$password:String!,$firstname:String!,$lastname:String! ){
  createUser( email: $email, password: $password , firstname: $firstname, lastname: $lastname){
    user{
      _id
    }
    errors{
      field
			message
    }
  }
}
`;
const MUTTEST = gql`
mutation{
  createUser(options: { email: "hfghsdsdsdfddghf", password: "passwor1Ad" }, firstname:"sdqsdqsdqsd", lastname:"sdqsdqsdqsd"){
    user{
      _id
    }
    errors{
      field
			message
    }
  }
}`

export default function SignUp() {
  const {history}=useHistory

  const [firstname, setFirstName] = useState ('');
  const [lastname, setLastName] = useState ('');
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [confirmPassword, setConfirmPassword] = useState ('');
  const [help, setHelp] = useState ('');

  const [firstNameError, setFirstNameError] = useState (false);
  const [lastNameError, setLastNameError] = useState (false);
  const [emailError, setEmailError] = useState (false);
  const [passwordError, setPasswordError] = useState (false);
  const [confirmPasswordError, setConfirmPasswordError] = useState (false);


  const [register, { loading, error, data }] = useMutation(REGISTER_MUT);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    
  const handleSubmit = async (event) => {
    
    event.preventDefault();

    setFirstNameError(false);
    setLastNameError(false);
    setEmailError(false);
    setPasswordError(false);
    setConfirmPasswordError(false);

    if(firstname === '') {
      setFirstNameError(true)
    }

    if(lastname === '') {
      setLastNameError(true)
    }

    if(email === '') {
      setEmailError(true)
    }

    if(password === '') {
      setPasswordError(true)
    }

    if(confirmPassword === '') {
      setConfirmPasswordError(true)
    }

    if(!(confirmPassword === password)) {
      setPasswordError(true);
      setConfirmPasswordError(true)
    }


    // const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
   const {data}= await  register(
     {
       variables:{
        email:email,
        password:password,
       lastname:lastname,
       firstname:firstname
     },
    }
    )
    console.log("createUser",data.createUser.user)
    console.log(data.createUser.errors)
      if (data.createUser.user == null)
      console.log(data.createUser.errors)
      else 
      console.log(data.createUser.user)
      history.push("/home")
      history.go(+1)
   }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h2" variant="h5">
          Don't have an account? Sign Up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6}>
                <TextField
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    setFirstNameError(false);}}
                  autoComplete="given-name"
                  name="firstName"
                  value={firstname}
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  error={firstNameError}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <TextField
                onChange={(e) => {
                  setLastName(e.target.value);
                  setLastNameError(false);}}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={lastname}
                  autoComplete="family-name"
                  error={lastNameError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                onChange={(e) => {
                  setEmail(e.target.value)
                  setEmailError(false);}}
                  required
                  fullWidth
                  value={email}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={emailError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                onChange={(e) => {
                  setPasswordError(false);
                  setPassword(e.target.value);
                  setHelp("Minimum length of 8 characters, at least one digit, one uppercase and one lowercase character")}}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  value={password}
                  id="password"
                  autoComplete="new-password"
                  helperText= {help}
                  error={passwordError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={(e) => {
                    setConfirmPasswordError(false);
                    setConfirmPassword(e.target.value);
                  }}
                  name="password_confirm"
                  label="Confirm password"
                  type="password"
                  value={confirmPassword}
                  id="password_confirm"
                  autoComplete="new-password"
                  helperText= "Rewrite the same password"
                  error={confirmPasswordError}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Subscribe to our newsletter"
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}