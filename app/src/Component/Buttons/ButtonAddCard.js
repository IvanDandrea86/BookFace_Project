import * as React from 'react';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PendingIcon from '@mui/icons-material/Pending';

export default function ButtonAddCard() {

  const [dis, setDis] = React.useState(false);
  const [add, setAdd] = React.useState("Add friend");
  const [pending, setPending] = React.useState(<AddCircleIcon />);

  const handleClick = () => {
    console.info('Wait for the response.');
    setDis(true);
    setAdd("Pending...");
    setPending(<PendingIcon />);
    setTimeout(() => {
  
    }, 1000);
  };

  return (
      <Button 
        size="small"
        sx={{width: "80%"}} 
        disabled={dis}
        onClick={handleClick}
        variant="contained" 
        endIcon={pending}
        color="primary">
        {add}
      </Button>
    
  );
}
