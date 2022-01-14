import React from 'react';
import Story from './Story';
import Grid from '@mui/material/Grid';

function StoryReel() {

    

    return (

        <Grid container className='storyReel'item Grid sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: "wrap"}}>
            <Story item
            profileSrc="https://picsum.photos/id/1047/800/600/"
            image="https://picsum.photos/id/1015/800/600/"
            title="Gizem Onur"
        />
        <Story item
            profileSrc="https://picsum.photos/id/1045/800/600/"
            image="https://picsum.photos/id/1002/800/600/"
            title="Clara Climent"
        />
        <Story itel
            profileSrc="https://picsum.photos/id/1049/800/600/"
            image="https://picsum.photos/id/1035/800/600/"
            title="Samir Nacer"
        />
        <Story
            profileSrc="https://picsum.photos/id/1061/800/600/"
            image="https://picsum.photos/id/1033/800/600/"
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
