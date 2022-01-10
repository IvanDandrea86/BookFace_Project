import React from 'react';
import './Home.css';
import Feed from "./Feed";
import Sidebar from './Sidebar';
import { IsAuth } from './util/isAuth';


function Home() {
    return ( 
        <div className='home_body'sx={{width:"100%"}}>
            {/*<Sidebar />*/}
            <IsAuth/>
            <Feed />
        </div>
    );
}

export default Home
