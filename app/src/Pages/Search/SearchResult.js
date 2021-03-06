import React from 'react';
import AddFriendCard from '../../Component/AddFriendCard';
import ButtonAddCard from '../../Component/Buttons/ButtonAddCard';
import ButtonFriendCard from '../../Component/Buttons/ButtonFriendCard';
import ButtonVisit from '../../Component/Buttons/ButtonVisit';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useQuery,gql} from '@apollo/client';
import Loading from '../../Util/Loading';
import ErrorMessage from '../../Util/ErrorMessage'

import { SearchContext } from '../../Context/search-context';
import {useContext} from 'react'
import { AuthContext } from '../../Context/auth-context';



const NewFriends =gql `
    {findAllUser
        {_id,
        firstname
        lastname
        friendList}
    }
`;
const Finding = () => {
  const value= useContext(SearchContext)
  const context =useContext(AuthContext)
  
  

  const { loading, error, data } = useQuery(NewFriends);
    if (loading) return <Loading />;
    if (error) return <ErrorMessage />;
    return (
        <Grid container spacing={0.5}>

          {data.findAllUser.filter((val) => {
            return val.firstname.toLowerCase().includes((value.query).toLowerCase())}).map(val => (
            <Grid item key={val._id} xs={12} sm={4} md={3} sx={{mb: 1,  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <AddFriendCard firstname={val.firstname} lastname={val.lastname} button={<ButtonVisit valueId ={val._id} />} bouton={ val.friendList.includes(context.auth)? <ButtonFriendCard/>: <ButtonAddCard /> } />
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