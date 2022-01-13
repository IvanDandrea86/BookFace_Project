
import * as React from 'react';
import Button from '@mui/material/Button';



 function ButtonFriend() {


const value =4


return (
    
        <Button
          disableElevation
          disableFocusRipple
          disableRipple 
          href="/friend"
          variant="contained" 
            value={value}
          color="primary"
          sx={{borderRadius:8}}>
        You have {value} Friend Request
        </Button>
    );

}

export default ButtonFriend;