import React from 'react';
import './Home.css';
import Feed from "./Feed";
import Sidebar from './Sidebar';


import { Message } from '@mui/icons-material';


function Home() {
    return ( 
        <div className='home_body'sx={{width:"100%"}}>
        
            <Feed />
           
        </div>
    );
}

export default Home
