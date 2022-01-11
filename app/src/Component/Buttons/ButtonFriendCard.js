import * as React from 'react';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';

export default function ButtonFriendCard() {

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
        endIcon={<DoneIcon />}
        color="success"
        sx={{borderRadius:8}}>
        Friend
      </Button>
  );
}
