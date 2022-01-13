import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PanoramaIcon from '@mui/icons-material/Panorama';

export default function ButtonStory() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" startIcon={<PanoramaIcon />} sx={{mixBlendMode: 0.5, width: "100%" }} onClick={handleClickOpen}>
        New story
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>What's new in your life?</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Your story"
            type="story"
            fullWidth
            variant="standard"
            placeholder="Placeholder"
            multiline
          
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add story</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
