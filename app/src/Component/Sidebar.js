import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import { Grid, Typography } from "@mui/material";
import Message from './Message'

function Sidebar() {

    return <div className="sidebar">

        <div className="title"> 
        <h4> Active Friends </h4>
        </div>

        <Grid container sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>

            <Grid item sx={{ ml: 1, display: "flex", justifyContent: "flex-start", flexDirection: "column", }}>
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                
            </Grid>
        </Grid>

    </div>


}

export default Sidebar;