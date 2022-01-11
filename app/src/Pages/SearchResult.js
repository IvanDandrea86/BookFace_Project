import React from 'react';
import AddFriendCard from '../Component/AddFriendCard';
import ButtonAddCard from '../Component/Buttons/ButtonAddCard';
import ButtonFriendCard from '../Component/Buttons/ButtonFriendCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useQuery,gql} from '@apollo/client';
import Loading from '../Util/Loading';
import ErrorMessage from '../Util/ErrorMessage'
import { Auth } from '../Util/isAuthApollo';


const NewFriends =gql `
    {findAllUser
        {_id,
        firstname
        lastname
        friendList}
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

          {data.findAllUser.filter((val) => {
            return val.firstname.toLowerCase().includes(("").toLowerCase())}).map(val => (
            <Grid item key={val._id} xs={12} sm={4} md={3} sx={{mb: 1,  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <AddFriendCard firstname={val.firstname} lastname={val.lastname} bouton={ val.friendList.includes(user.id)? <ButtonFriendCard/>: <ButtonAddCard /> } />
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
