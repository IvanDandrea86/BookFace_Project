import React from 'react';
import '../Home/Home.css';
import Feed from "../../Component/Feed";




function Home() {
    return ( 
        <div className='home_body'sx={{width:"100%"}}>
         
            <Feed />
           
        </div>
    );
}

export default Home
