import React, { useState } from 'react';
import { createTheme} from '@mui/material/styles';
import {
  useMutation,
  gql
} from "@apollo/client";
import {client} from './util/createApolloClient'


const theme = createTheme();

const LOGIN_MUT = gql`
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
    const [login, { loading, error, data }] = useMutation(LOGIN_MUT);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
      const handleSubmit = (e) => {
        e.preventDefault(); // no page reload due to submit
        client.mutate({
          mutation:LOGIN_MUT,
          variables: { email: email,
            password:password }

          }
        ).then((response) => console.log(response.data))
        .catch((err) => console.error(err));
        }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input value={email} onChange={e => setEmail(e.currentTarget.value)} />
      <input value={password} onChange={e => setPassword(e.currentTarget.value)} />
      <button  type="sumbit">Log in!</button>
    </form>
  )
}