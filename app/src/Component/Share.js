import { Avatar} from '@mui/material';
import React from 'react';
import './Share.css';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import PublishIcon from '@mui/icons-material/Publish';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';




function Share ({ profilePic, image, username, message }) 
{
    return (
             
        <Grid container sx={{width: "100%", justifyContent: "center", alignItems: "center"}}>
            <div item className='share' sx={{width: "100%", flexDirection:"column", flexWrap:"wrap", justifyContent: "center", alignItems: "center"}} >
            
                <div className="share_top" sx={{flexDirection:"column", flexWrap:"wrap", justifyContent: "center"}}>
                    <Avatar src={profilePic}
                        className="share_avatar" />
                    <div className="share_topInfo">
                        <h3>{username}</h3>
                    </div>
                    
                </div>
            
            
                <div className="share_bottom" sx={{display: "flex", flexDirection:"column", flexWrap:"wrap", justifyContent: "center"}}>
                   <form item sx= {{mb: 1,  display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center', flexwrap: 'wrap', justifyContent:"space-between"}}>
                    <input sx={{display:"flex", flexwrap:"wrap"}}
                    className='share_input' placeholder={"What's on your mind?"}>
                    </input>

                   </form>
                </div>

                <Divider />

    
                    <Grid container className="options" sx={{width:"100%", display: "flex", flexDirection:"row", justifyContent:"space-between",}}>
                    <Grid item sx={{ ml:1, display: "flex", justifyContent:"flex-start", flexDirection:"row", alignItems:"center"}}>
                            <IconButton size="large" sx={{  m: 0.5, bgcolor: "#dedede", justifyContent: "center"}}>
                                < InsertPhotoIcon src={image} sx={{width: 16, height: "auto", justify: "center"}} 
                            
                                />
                            </IconButton>
                    </Grid>
                        <Grid item sx={{display: "flex", flexDirection:"row", flexWrap:"wrap", justifyContent: "flex-end"}}>
                        <IconButton size="small" sx={{  m: 0.5, bgcolor: "#1E90FF", justifyContent: "center", marginRight:2}}>
                            <PublishIcon  sx={{ m:1, width: 16, height:"auto", justifyContent: "flex-end", fill: "white", }}/>
                            </IconButton>
                        </Grid>
                    </Grid>

                
            </div>
        </Grid>

    );
}

export default Share;
