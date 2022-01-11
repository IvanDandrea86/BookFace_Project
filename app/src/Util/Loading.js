import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';

function Loading() {
    return (
        <Container sx={{ width: '100%', display:"flex", justifyContent:"center", alignItems:"center" }}>
            <CircularProgress color='primary'/>
        </Container>
    )
}

export default Loading
