import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function ButtonLike() {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="like" aria-label="like" color="warning" sx={{borderRadius:"50%", m:1, border:0, width:"100%"}}>
        <FavoriteIcon />
      </ToggleButton>

    </ToggleButtonGroup>
  );
}
