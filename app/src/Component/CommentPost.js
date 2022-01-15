import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ButtonPostComment from './Buttons/ButtonPostComment';
import ButtonLike from './Buttons/ButtonLike';
import Divider from '@mui/material/Divider';

export default function CommentPost() {
  return (
    <Box
      component="form"
      sx={{
        display:"flex", justifyContent:"space-between", flexAlign:"row", width:"100%", alignContent:"flex-end"
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
          sx={{m:1, width:"70%"}}
          id="outlined-textarea"
          placeholder="Placeholder"
        />
            <ButtonPostComment/>
            <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
            <ButtonLike />
      
    </Box>
  );
}
