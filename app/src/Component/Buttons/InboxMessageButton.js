
import * as React from 'react';
import Button from '@mui/material/Button';



 function ButtonInBox({messages}) {
const value =messages.length
return (
    
        <Button
          disableElevation
          disableFocusRipple
          disableRipple 
          href="/friend"
          variant="contained" 
            value={value}
          color="warning"
          sx={{borderRadius:8}}>
        You have {value} message
        </Button>
    );

}

export default ButtonInBox;