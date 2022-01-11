import React from 'react';
import AddFriendCard from './AddFriendCard';
//import ButtonAddCard from './ButtonAddCard';
import ButtonFriendCard from './ButtonFriendCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useQuery,gql} from '@apollo/client';
import Loading from './util/Loading';
import ErrorMessage from './util/ErrorMessage'
import { Auth } from './util/isAuthApollo';


const NewFriends =gql `
    {findAllUser
        {_id,
        firstname
        lastname}
    }
`;
const Finding = () => {
  
  const user=Auth();
  console.log(user.id);

  const { loading, error, data } = useQuery(NewFriends);
    if (loading) return <Loading />;
    if (error) return <ErrorMessage />;
    return (
        <Grid container spacing={0.5}>
          {data.findAllUser.map(find => (
            <Grid item key={find._id} xs={12} sm={4} md={3} sx={{mb: 1,  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <AddFriendCard firstname={find.firstname} lastname={find.lastname} bouton={  <ButtonFriendCard/>}/>
            </Grid>
          ))}
        </Grid>
      );
};
function FindingFriends() {
    return (
        <Box sx={{ width: "90%", flexGrow: 1, mx: "auto", my:6 }}>
        <Finding />  
        </Box>  
    )
}

export default  FindingFriends
