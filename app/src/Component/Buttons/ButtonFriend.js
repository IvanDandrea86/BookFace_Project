
import  React, {useContext} from 'react';
import Button from '@mui/material/Button';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import {useQuery,gql} from '@apollo/client';
import Loading from '../../Util/Loading';
import ErrorMessage from '../../Util/ErrorMessage'
import { AuthContext } from '../../Context/auth-context';


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

 function ButtonFriend() {
   const context=useContext(AuthContext)
  const { loading, error, data } = useQuery(RESQUESTFRIENDS, {
    variables: {
        user_id: context.auth
    }
});
if (loading) return <Loading/> ;
if (error) return <ErrorMessage/> ;

const value =data.findFriendRequestRecived.length


return (
    
        <Button Button 
          startIcon={<GroupAddIcon />} 
          sx={{width: "100%", bgcolor:"#42a5f5"}} 
          href="/requests"
          variant="contained" 
          value={value}
          >
            {value} Friend Request
        </Button>
    );

}

export default ButtonFriend;