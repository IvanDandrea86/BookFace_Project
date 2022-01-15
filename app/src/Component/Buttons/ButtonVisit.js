import * as React from 'react';
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';


export default function ButtonVisit({valueId}) {


 

  return (
    
    <Link
    style={{ textDecoration: 'none' }}
    sx={{width: "100%", bgcolor:"#42a5f5", my:1}} 
    underline="none"
    variant="button"
    to={{
    pathname: `/profile/:${valueId}`,
    state: { users: valueId }
  }}
>
    <Button
      underline="none"
      size="small"
      sx={{width: "100%", bgcolor:"#42a5f5", my:1}} 
      variant="contained" 
      endIcon={<NavigateNextIcon  />}
      color="primary">
       See profile
    </Button>
     </Link>
  
      
  );
}

