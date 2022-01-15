
import React, {useContext, useState}from 'react';
import './Chatbox.css';
import { Avatar,  Divider, Fab, Grid,  ListItem, ListItemIcon,  TextField,List, Typography } from '@mui/material';
import PublishIcon from '@mui/icons-material/Publish';
import { AuthContext } from '../../Context/auth-context';
import { gql, useQuery} from '@apollo/client';
import Loading from '../../Util/Loading';
import ErrorMessage from '../../Util/ErrorMessage'
import UserElement from './UserElement';
import Conversation from './Converstion';
const Message= gql`
query($user_id:String!)
{findMessageByReciver(user_id:$user_id){
    _id
  createdAt
  content
  sender_id
  reciver_id
}}
`

const Chat = () => {
    const context= useContext(AuthContext);
    
 const  [user,setUser]=useState(   )
    
    const {loading,error,data}=useQuery(Message,{variables:{
        user_id:context.auth
    }}) 

    if (loading) return <Loading/> ;
    if (error) return <ErrorMessage/> ;
    
    const sendMessage =()=>{}
    
  
   
    
  return (
      <div>
        <Grid container>
            <Grid item xs={12} >
                <Typography variant="h5" className="header-message"  color="primary" style={{padding: '10px'}}> Welcome to BookFace Chatbox</Typography>
            </Grid>
        </Grid>
        <Grid container  className="chatSection">
            <Grid item xs={3} className={"borderRight500"}>
             
                <List className="list" >

                   {data.findMessageByReciver.map((val)=>(
                       
                       <ListItem button key={val._id}
                       onClick={()=>{setUser(val.sender_id)
                        console.log(user)}
                       }
                        >
                           <ListItemIcon>
                            <Avatar alt="" src="https://source.unsplash.com/random" />
                        </ListItemIcon> 
                       <UserElement 
                       userData={val}
                       />
                          </ListItem>
                         
                       ))}
                </List>
          
            </Grid>
            <Grid item xs={9}>
                <List className="messageArea" >
                {data.findMessageByReciver.filter((val) => {
            return val.sender_id.includes(user)}).map(val => (
                    <Conversation message={val}/>  
                    ))}
                </List>
                <Divider />
                <Grid container style={{padding: '20px'}}>
                    <Grid item xs={11}>
                        <TextField  label="Answare" fullWidth />
                    </Grid>
                    <Grid item xs={1} align="right">
                        <Fab color="primary" aria-label="add" onClick={sendMessage}><PublishIcon 
                        /></Fab>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      </div>
  );
}

export default Chat;
