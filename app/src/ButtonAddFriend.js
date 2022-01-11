import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import PersonAddIcon from '@mui/icons-material/PersonAdd';


function GrowTransition(props) {
  return <Grow {...props} />;
}

export default function ButtonAddFriend() {
  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });

  const handleClick = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  return (
    <div>
      <Button onClick={handleClick(GrowTransition)} variant="contained" startIcon={<PersonAddIcon />} sx={{mb: 0.5, width: "100%" }}>Add friend</Button>
      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        message="Your friend request has been sent."
        key={state.Transition.name}
      />
    </div>
  );
}
