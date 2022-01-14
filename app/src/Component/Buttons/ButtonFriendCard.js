import * as React from 'react';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';

export default function ButtonFriendCard() {

  const handleClick = () => {
    console.info('You clicked the button.');
  };

  return (
      <Button
        size="small"
        sx={{width: "80%"}} 
        onClick={handleClick}
        variant="contained" 
        endIcon={<DoneIcon />}
        color="success">
        Friend
      </Button>
  );
}
