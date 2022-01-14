
import React, {useContext, useState}from 'react';
import './Chatbox.css';
import { Avatar, Button, Divider, Fab, Grid, IconButton, Input, List, ListItem, ListItemIcon, ListItemText, Paper, TextField, Typography } from '@mui/material';
import PublishIcon from '@mui/icons-material/Publish';
import { AuthContext } from '../../Context/auth-context';
import { gql, useQuery} from '@apollo/client';
import Loading from '../../Util/Loading';
import ErrorMessage from '../../Util/ErrorMessage'
import UserElement from './UserElement';
const Message= gql`
query($user_id:String!)
{findMessageByReciver(user_id:$user_id){
  createdAt
  content
  sender_id
  reciver_id
}}
`

const Chat = () => {
    const context= useContext(AuthContext);
    
  let user=context.auth
    
    const {loading,error,data}=useQuery(Message,{variables:{
        user_id:user
    }}) 

    if (loading) return <Loading/> ;
    if (error) return <ErrorMessage/> ;
    
    const sendMessage =()=>{
        console.log("click")
    }
    const   OpenMessage =async(prop)=>{
      user=prop
    }
   
    
  return (
      <div>
        <Grid container>
            <Grid item xs={12} >
                <Typography variant="h5" className="header-message"  color="primary" style={{padding: '10px'}}> Welcome to BookFace Chatbox</Typography>
            </Grid>
        </Grid>
        <Grid container  className="chatSection">
            <Grid item xs={3} className={"borderRight500"}>
                <Paper style={{maxHeight: 400, overflow: 'auto'}}>
                <List className="list" >

                   {data.findMessageByReciver.map((val)=>(
                       <ListItem button key="User Name">
                           <ListItemIcon>
                            <Avatar alt="" src="https://source.unsplash.com/random" />
                        </ListItemIcon>
                       <Button
                       onClick={OpenMessage(val.sender_id)}>   
                       <UserElement 
                       userData={val}
                       />
                       </Button>
                          </ListItem>
                       ))}
                </List>
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <List className="messageArea" >
                {data.findMessageByReciver.filter((val) => {
            return val.sender_id.includes(user)}).map(val => (
                    <ListItem key="1">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align="right" primary={val.content}></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="right" secondary={val.createdAt}></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                    ))}
                </List>
                <Divider />
                <Grid container style={{padding: '20px'}}>
                    <Grid item xs={11}>
                        <TextField  label="Answare" fullWidth />
                    </Grid>
                    <Grid xs={1} align="right">
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
