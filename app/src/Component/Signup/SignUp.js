
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  useMutation,
  gql
} from "@apollo/client";
import { useHistory } from 'react-router-dom';
import Loading from '../../Util/Loading';
import ErrorMessage from '../../Util/ErrorMessage'



const theme = createTheme();

const REGISTER_MUT = gql`
  mutation (
    $email: String!
    $password: String!
    $firstname: String!
    $lastname: String!
  ) {
    createUser(
      email: $email
      password: $password
      firstname: $firstname
      lastname: $lastname
    ) {
      user {
        _id
      }
      errors {
        field
        message
      }
    }
  }
`;

export default function SignUp() {

  const [firstnameError, setFirstNameError] = useState(false);
  const [lastnameError, setLastNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [lastname, setLastName] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [firstname, setFirstName] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [passwordColor, setPasswordColor] = useState("primary");
  const [emailColor, setEmailColor] = useState("primary");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("primary");
  const [helperPass, setHelperPass] = useState("");
  const [helperEmail, setHelperEmail] = useState("");
  const [helperConfirmPass, setHelperConfirmPass] = useState("");
  const history = useHistory();

  




  const [register, { loading, error, data }] = useMutation(REGISTER_MUT);
   if (loading) return <Loading/>
   if (error) return <ErrorMessage/> 
    

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
   
      if (data.createUser.user == null)
   
      {history.push("/")
      history.go(+1)}
      else 
      {
      history.push("/home")
      history.go(+1)}

      window.location.reload(false);
    }
  

  const handleEmailChange = (e) => {
    setEmail(e);
    if (
      e === "" ||
      !e.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setEmailError(true);
      setHelperEmail("Insert a valid email format [*@.*]");
    } else {
      setEmailError(false);
      setHelperEmail("");
      setEmailColor("success");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e);
    if (
      e === "" ||
      !e.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
    ) {
      setPasswordError(true);
      setHelperPass(
        "Password must be at least 8,contain at leat one digit, one uppercase and one lowercase character"
      );
    } else {
      setPasswordError(false);
      setHelperPass("");
      setPasswordColor("success");
    }
  };

  const handlePasswordConfirmChange = (e, password) => {
    setConfirmPassword(e);
    if (e === "") {
      setConfirmPasswordError(true);
      setHelperPass(
        "Password must be at least 8,contain at leat one digit, one uppercase and one lowercase character"
      );
    } else if (e !== password) {
      setConfirmPasswordError(true);
      setHelperConfirmPass("Passwords must bethe same ");
    } else {
      setConfirmPasswordError(false);
      setHelperConfirmPass("");
      setHelperPass("");
      setConfirmPasswordColor("success");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h2" variant="h5">
            Don't have an account? Sign Up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6}>
                <TextField
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    setFirstNameError(false);
                  }}
                  autoComplete="given-name"
                  name="firstName"
                  value={firstname}
                  required
                  fullWidth
                  id="firstNameNew"
                  label="First Name"
                  autoFocus
                  error={firstnameError}
                />

              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <TextField
      onChange={(e) => {
                    setLastName(e.target.value);
                    setLastNameError(false);
                  }}

                  required
                  fullWidth
                  id="lastNameNew"
                  label="Last Name"
                  name="lastName"
                  value={lastname}
                  autoComplete="family-name"
                  error={lastnameError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
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
                  helperText={helperEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
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
                  helperText={helperPass}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={(e) =>
                    handlePasswordConfirmChange(e.target.value, password)
                  }
                  name="password_confirm"
                  label="Confirm password"
                  type="password"
                  value={confirmPassword}
                  id="password_confirm"
                  error={confirmPasswordError}
                  autoComplete="new-password"
                  color={confirmPasswordColor}
                  helperText={helperConfirmPass}
                />
              </Grid>
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
