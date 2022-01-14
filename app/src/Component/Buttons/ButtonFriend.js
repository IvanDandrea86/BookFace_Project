
import * as React from 'react';
import Button from '@mui/material/Button';
import GroupAddIcon from '@mui/icons-material/GroupAdd';



 function ButtonFriend() {


const value =4


return (
    
        <Button Button 
          startIcon={<GroupAddIcon />} 
          sx={{width: "100%", bgcolor:"#42a5f5"}} 
          href="/friend"
          variant="contained" 
          value={value}
          >
            {value} Friend Request
        </Button>
    );

}

export default ButtonFriend;