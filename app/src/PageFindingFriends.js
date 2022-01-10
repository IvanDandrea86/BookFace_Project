import React from 'react';
import AddFriendCard from './AddFriendCard';
//import ButtonAddCard from './ButtonAddCard';
import ButtonFriendCard from './ButtonFriendCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { client } from './util/createApolloClient';
import {useQuery,gql} from '@apollo/client';

const NewFriends =gql `
    {findAllUser
        {_id,
        firstname
        lastname}
    }
`;

client.query({
  query:NewFriends
}).then((response) => console.log(response.data))
.catch((err) => console.error(err));


const Finding = () => {
  const { loading, error, data } = useQuery(NewFriends);
  
    
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Oh no... {error.message}</p>;
    return (
        <Grid container spacing={0.5}>
          {data.findAllUser.map(find => (
            <Grid item key={find._id} xs={12} sm={4} md={3} sx={{mb: 1,  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <AddFriendCard firstname={find.firstname} lastname={find.lastname} bouton={<ButtonFriendCard/>}/>
            
            
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

export default FindingFriends
