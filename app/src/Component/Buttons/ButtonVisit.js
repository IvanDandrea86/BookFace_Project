import * as React from 'react';
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function ButtonVisit() {

  const handleClick = () => {
    console.info('You clicked the button.');
  };

  return (
      <Button
        disableElevation
        disableFocusRipple
        disableRipple 
        onClick={handleClick}
        variant="contained" 
        endIcon={<NavigateNextIcon  />}
        color="primary"
        sx={{borderRadius:8}}>
        Visit Profile
      </Button>
  );
}
