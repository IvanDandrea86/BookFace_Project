import * as React from 'react';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ButtonAcceptFriend() {

  const [dis, setDis] = React.useState(false);
  const [add, setAdd] = React.useState("Accept friend");
  const [pending, setPending] = React.useState(<AddCircleIcon />);

  const handleClick = () => {
    setDis(true);
    setAdd("Accepted!");
    setPending(<CheckCircleIcon />);
    setTimeout(() => {

    }, 1000);
  };

  return (
      <Button 
        disabled={dis}
        onClick={handleClick}
        variant="contained" 
        endIcon={pending}
        color="primary"
        sx={{mb:1, width:"80%", m:0.5, display:"flex", justifyContent:"space-between"}}>
        {add}
      </Button>
    
  );
}
