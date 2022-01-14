import React from 'react';
import Story from './Story';
import Grid from '@mui/material/Grid';

function StoryReel() {

    const image= "https://picsum.photos/id/" + Math.floor(Math.random()*1000) + "/800/600/"

    return (

        <Grid container className='storyReel'item Grid sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: "wrap"}}>
            <Story item
            profileSrc={image}
            image={image}
            title="Gizem Onur"
        />
        <Story item
            profileSrc={image}
            image={image}
            title="Clara Climent"
        />
        <Story itel
            profileSrc={image}
            image={image}
            title="Samir Nacer"
        />
        <Story
            profileSrc={image}
            image={image}
            title="Ivan Dandrea"
        />
      
 
            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}
    </Grid>
    )
}

export default StoryReel
