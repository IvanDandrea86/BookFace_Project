import * as React from 'react';
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';


export default function ButtonVisit({valueId}) {


 

  return (
    <Link
    to={{
      pathname: `/profile/:${valueId}`,
      state: { users: valueId }
    }}
  >
      <Button
        disableElevation
        disableFocusRipple
        disableRipple 
        variant="contained" 
        endIcon={<NavigateNextIcon  />}
        color="primary"
        sx={{borderRadius:8}}>
        Visit Profile
      </Button>
      </Link>
      
  );
}
