
import React from 'react';
import './Chatbox.css';
import { Avatar, Divider, Fab, Grid, IconButton, Input, List, ListItem, ListItemIcon, ListItemText, Paper, TextField, Typography } from '@mui/material';
import PublishIcon from '@mui/icons-material/Publish';



const Chat = () => {
  
  return (
      <div>
        <Grid container>
            <Grid item xs={12} >
                <Typography variant="h5" className="header-message"  color="primary" style={{padding: '10px'}}> Welcome to BookFace Chatbox</Typography>
            </Grid>
        </Grid>
        <Grid container component={Paper} className="chatSection">
            <Grid item xs={3} className={"borderRight500"}>
                <List>
                    <ListItem button key="RemySharp">
                        <ListItemIcon>
                        <Avatar alt="Remy Sharp" src="" />
                        </ListItemIcon>
                        <ListItemText primary="User Name"></ListItemText>
                    </ListItem>
                </List>
                <Divider />
                <Grid item xs={12} style={{padding: '10px'}}>
                    <TextField id="standard-basic" label="Search" variant="outlined" fullWidth />
                </Grid>
                <Divider />
                <Paper style={{maxHeight: 400, overflow: 'auto'}}>
                <List className="list" >
                    <ListItem button key="User Name">
                        <ListItemIcon>
                            <Avatar alt="" src="" />
                        </ListItemIcon>
                        <ListItemText primary="User Name">User Name</ListItemText>
                    
                    </ListItem>
                    <ListItem button key="User Name">
                        <ListItemIcon>
                            <Avatar alt="" src="" />
                        </ListItemIcon>
                        <ListItemText primary="User Name"> User Name</ListItemText>
                    </ListItem>
                    <ListItem button key="User Name">
                        <ListItemIcon>
                            <Avatar alt="User Name" src="" />
                        </ListItemIcon>
                        <ListItemText primary="User Name">User Name</ListItemText>
                    </ListItem>
                    <ListItem button key="User Name">
                        <ListItemIcon>
                            <Avatar alt="User Name" src="" />
                        </ListItemIcon>
                        <ListItemText primary="User Name">User Name</ListItemText>
                    </ListItem>
                    <ListItem button key="User Name">
                        <ListItemIcon>
                            <Avatar alt="User Name" src="" />
                        </ListItemIcon>
                        <ListItemText primary="User Name">User Name</ListItemText>
                    </ListItem>
                    <ListItem button key="User Name">
                        <ListItemIcon>
                            <Avatar alt="User Name" src="" />
                        </ListItemIcon>
                        <ListItemText primary="User Name">User Name</ListItemText>
                    </ListItem>
                    <ListItem button key="User Name">
                        <ListItemIcon>
                            <Avatar alt="User Name" src="" />
                        </ListItemIcon>
                        <ListItemText primary="User Name">User Name</ListItemText>
                    </ListItem>
                    <ListItem button key="User Name">
                        <ListItemIcon>
                            <Avatar alt="User Name" src="" />
                        </ListItemIcon>
                        <ListItemText primary="User Name">User Name</ListItemText>
                    </ListItem>
                    <ListItem button key="User Name">
                        <ListItemIcon>
                            <Avatar alt="User Name" src="" />
                        </ListItemIcon>
                        <ListItemText primary="User Name">User Name</ListItemText>
                    </ListItem>
                    <ListItem button key="User Name">
                        <ListItemIcon>
                            <Avatar alt="User Name" src="" />
                        </ListItemIcon>
                        <ListItemText primary="User Name">User Name</ListItemText>
                    </ListItem>
                    <ListItem button key="User Name">
                        <ListItemIcon>
                            <Avatar alt="User Name" src="" />
                        </ListItemIcon>
                        <ListItemText primary="User Name">User Name</ListItemText>
                    </ListItem>
                </List>
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <List className="messageArea" >
                    <ListItem key="1">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align="right" primary="Hey how are you ?"></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="right" secondary="09:30"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem key="2">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align="left" primary="Hey, Iam Good! And you ?"></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="left" secondary="09:31"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem key="3">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align="right" primary="I am good, Thanks!"></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="right" secondary="10:30"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                </List>
                <Divider />
                <Grid container style={{padding: '20px'}}>
                    <Grid item xs={11}>
                        <TextField id="standard-basic" label="Type Something" fullWidth />
                    </Grid>
                    <Grid xs={1} align="right">
                        <Fab color="primary" aria-label="add"><PublishIcon /></Fab>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      </div>
  );
}

export default Chat;
