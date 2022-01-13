import { Avatar, makeStyles } from '@mui/material';
import React from 'react';
import './Chat.css';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import PublishIcon from '@mui/icons-material/Publish';





function Discussion({ profilePic, image, username, message }) {
    return (

        <Grid container sx={{ width: "100%", alignItems: "center" }}>
            <div item className='discussion' sx={{ width: "100%", flexDirection: "column", flexWrap: "wrap", justifyContent: "center", alignItems: "center"}} >

                <div item className='discussion_profile' sx={{ width: "100%", flexDirection: "column", flexWrap: "wrap", bgcolor:"#D3D3D3"}} >
                    <Avatar src={profilePic}
                        className="discussion_avatar" />
                    <div className="discussion_topInfo">
                        <h3>{username}</h3>
                    </div>
                </div>

                <div className="discussion_top" sx={{ flexDirection: "column", flexWrap: "wrap", justifyContent: "center" }}>


                    <div className="discussion_bottom" sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "center" }}>
                        <form item sx={{ mb: 1, display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center', flexwrap: 'wrap', justifyContent: "space-between" }}>
                            <input sx={{ display: "flex", flexwrap: "wrap" }}
                                className='discussion_input' placeholder={"Hello how are you?"}>
                            </input>

                        </form>
                    </div>


                </div>


                <div className="discussion_top" sx={{ flexDirection: "column", flexWrap: "wrap", justifyContent: "center" }}>


                    <div className="discussion_bottom" sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "center" }}>
                        <form item sx={{ mb: 1, display: 'flex', flexDirection: 'row', justifyContent: 'end', alignItems: 'center', flexwrap: 'wrap', justifyContent: "space-between" }}>
                            <input sx={{ display: "flex", flexwrap: "wrap" }}
                                className='discussion_input' placeholder={"Hi i'm good thank you!"}>
                            </input>

                        </form>
                    </div>




                </div>

                <Divider />



                <Grid container className="options" sx={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", justifyContent: "flex-end" }}>

                    <div className="discussion_bottom" sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap", }}>
                        <form item sx={{ mb: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', flexwrap: 'wrap', justifyContent: "space-between" }}>
                            <input sx={{ display: "flex", flexwrap: "wrap" }}
                                className='discussion_input' placeholder={"i'm sending a message"}>
                            </input>
                            <IconButton size="small" sx={{ m: 0.5, bgcolor: "#1E90FF", justifyContent: "flex-end", marginLeft: 3 }}>
                                <PublishIcon sx={{ m: 1, width: 16, height: "auto", justifyContent: "flex-end", fill: "white", }} />
                            </IconButton>
                        </form>




                    </div>


                </Grid>


            </div>
        </Grid>

    );
}

export default Discussion;
