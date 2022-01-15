
import { Avatar, Divider, Fab, Grid, IconButton, Input, List, ListItem, ListItemIcon, ListItemText, Paper, TextField, Typography } from '@mui/material';
import { gql, useQuery} from '@apollo/client';
import Loading from '../../Util/Loading';
import ErrorMessage from '../../Util/ErrorMessage'

const User= gql`
query($user_id:String!)
{findUserById(user_id:$user_id){
  firstname
  lastname
}}
`

const UserElement =({userData})=>{

    const {loading,error,data}=useQuery(User,{variables:{
        user_id:userData.sender_id
    }}) 

    if (loading) return <Loading/> ;
    if (error) return <ErrorMessage/> ;
    
    const loadMess =()=>{
     
    }
return(

                        
                        <ListItemText onClick={loadMess} 
                        primary={data.findUserById.lastname} 
                        secondary={data.findUserById.firstname} >

                        </ListItemText>
                 
)
}
export default UserElement;