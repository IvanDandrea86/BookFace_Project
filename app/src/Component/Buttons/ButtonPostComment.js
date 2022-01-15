import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function ButtonPostComment() {
  
    function handleChange() {
        // here goes the code to handle the request
    }

  return (
    
      <Button size="medium" type="sudmit" onClick={handleChange} value="like" aria-label="like" color="primary" sx={{m:1}}>
        <SendIcon />
      </Button>

  );
}
