import React from 'react';
import AcceptFriendCard from '../Component/AcceptFriendCard';
import ButtonAddCard from '../Component/Buttons/ButtonAddCard';
import ButtonFriendCard from '../Component/Buttons/ButtonFriendCard';
import ButtonVisit from '../Component/Buttons/ButtonVisit';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useQuery,gql} from '@apollo/client';
import Loading from '../Util/Loading';
import ErrorMessage from '../Util/ErrorMessage'

import { SearchContext } from '../Context/search-context';
import {useContext} from 'react'
import { AuthContext } from '../Context/auth-context';
import ButtonAcceptFriend from '../Component/Buttons/ButtonAcceptFriend';
import ButtonRefuseFriend from '../Component/Buttons/ButtonRefuseFriend';


const RESQUESTFRIENDS =gql `
 query($user_id:String!) {
  findFriendRequestRecived(user_id:$user_id)
    {_id
  status
  userSender
  createdAt
    }
}
`;



const Finding = () => {

  const context=useContext(AuthContext)

    const { loading, error, data } = useQuery(RESQUESTFRIENDS, {
        variables: {
            user_id: context.auth
        }
    });
    if (loading) return <Loading/> ;
    if (error) return <ErrorMessage/> ;
   
    return (
        <Grid container spacing={0.5}>
          {data.findFriendRequestRecived.map((val) => (
            <Grid item key={val._id} xs={12} sm={4} md={3} sx={{mb: 1,  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <AcceptFriendCard datasender={val} sx={{wdth:"100%"}} firstname="Prenom" lastname="Nom"  button={<ButtonAcceptFriend />} bouton={<ButtonRefuseFriend />}  />
            </Grid>
          ))}
      </Grid>
      );
};

function AcceptFriends() {
    return (
        <Box sx={{ width: "90%", flexGrow: 1, mx: "auto", my:6 }}>
        <Finding />  
        </Box>  
    )
}

export default  AcceptFriends
