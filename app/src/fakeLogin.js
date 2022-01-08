import React, { useState } from 'react';
import { createTheme} from '@mui/material/styles';
import {useMutation} from 'urql';


const theme = createTheme();

const REGISTER_MUT = `
mutation ( $email:String!,  $password:String! ){
  login(options: { email: $email, password: $password }) {
    errors {
      field
      message
    }
    user {
      _id
      username
    }
  }
}
`;

export default function FakeLogin() {
   
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    const [emailError, setEmailError] = useState (false);
    const [passwordError, setPasswordError] = useState (false);
    const [data,login] = useMutation(REGISTER_MUT)
    

  
      const handleSubmit = (e) => {
        e.preventDefault(); // no page reload due to submit
        login({ email,password}).then(({ data }) => {
          if (data.login.errors==null) {
              console.log(data.login)
              console.log(data.login.user._id)
           console.log("connesso")
          
          }
          else{
              console.log(data.login.errors[0].field)
              console.log(data.login.errors[0].message)  
        }
      })
      
    }

  return (

    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input value={email} onChange={e => setEmail(e.currentTarget.value)} />
      <input value={password} onChange={e => setPassword(e.currentTarget.value)} />
     
      <button disabled={data.fetching} type="sumbit">Log in!</button>
    </form>

  )

}