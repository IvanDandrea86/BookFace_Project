import React from 'react';
import AddFriendCard from './AddFriendCard';
import ButtonAddCard from './ButtonAddCard';
import ButtonFriendCard from './ButtonFriendCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useQuery,gql} from '@apollo/client';
import Loading from './util/Loading';
import ErrorMessage from './util/ErrorMessage';


const NewFriends =gql `
    {findAllUser
        {_id,
        firstname
        lastname
        friendList}
    }
`;
const Finding = () => {
  const { loading, error, data } = useQuery(NewFriends);
    if (loading) return <Loading />;
    if (error) return <ErrorMessage />;
    return (
        <Grid container spacing={0.5}>
          {data.findAllUser.filter((val) => {
            return val.firstname.toLowerCase().includes(("Li").toLowerCase())}).map(val => (
            <Grid item key={val._id} xs={12} sm={4} md={3} sx={{mb: 1,  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <AddFriendCard firstname={val.firstname} lastname={val.lastname} bouton={ val.friendList.map(val => (val === "Dolly"))? <ButtonFriendCard/>: <ButtonAddCard /> } />
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
