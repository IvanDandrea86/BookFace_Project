import { Link } from "react-router-dom"
import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';


const NotFound = () => {
  return (
    <Box className="not-found" sx={{m:2, widht:"90%", alignItems:"center"}}>
      <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                The page you are looking for <strong>doesn't exist!!</strong><br/>
                <Link to="/">Return to the login page</Link>
            </Alert>
      </Stack>
    </Box>
  );
}
 
export default NotFound;