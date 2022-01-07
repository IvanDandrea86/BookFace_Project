import * as React from 'react';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import Stack from '@mui/material/Stack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PendingIcon from '@mui/icons-material/Pending';

export default function IconLabelButtons() {

  const [dis, setDis] = React.useState(false);
  const [add, setAdd] = React.useState("Add friend");
  const [pending, setPending] = React.useState(<AddCircleIcon />);

  const handleClick = () => {
    console.info('You clicked the button.');
  };

  const handleClickAdd = () => {
    console.info('Wait for the response.');
    setDis(true);
    setAdd("Pending...");
    setPending(<PendingIcon />);
    setTimeout(() => {
      console.log('This will run after 1 second!')
    }, 1000);
  };

  return (
    <Stack direction="row" spacing={2}>
      
      <Button 
        onClick={handleClick}
        variant="contained" 
        endIcon={<DoneIcon />}
        color="success"
        sx={{borderRadius:8}}>
        Friend
      </Button>
      <Button 
        disabled={dis}
        onClick={handleClickAdd}
        variant="contained" 
        endIcon={pending}
        color="primary"
        sx={{borderRadius:8}}>
        {add}
      </Button>
    </Stack>
  );
}
