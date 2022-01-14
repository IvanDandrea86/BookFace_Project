import * as React from 'react';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ButtonRefuseFriend() {

  const [dis, setDis] = React.useState(false);
  const [refuse, setRefuse] = React.useState("Refuse");
  const [pending, setPending] = React.useState(<CancelIcon />);

  const handleClick = () => {
    setDis(true);
    setRefuse("Refused!");
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
        {refuse}
      </Button>
    
  );
}
