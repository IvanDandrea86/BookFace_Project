import React from 'react';
import './Home.css';
import Feed from "./Feed";
import Sidebar from './Sidebar';


function Home() {
    return ( 
        <div className='home_body'>
            {/*<Sidebar />*/}
            <Feed />
        </div>
    );
}

export default Home
