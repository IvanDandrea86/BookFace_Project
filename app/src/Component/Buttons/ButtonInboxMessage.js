
import * as React from 'react';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';



 function ButtonInBox({messages}) {
const value =messages.length
return (
    
        <Button
          startIcon={<EmailIcon />} 
          sx={{width: "100%", bgcolor:"#42a5f5"}} 
          href="/friend"
          variant="contained" 
            value={value}
          color="warning">
          {value} new message(s)
        </Button>
    );

}

export default ButtonInBox;