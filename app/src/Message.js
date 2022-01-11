import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import SidebarRow from './SidebarRow'
import Discussion from './Discussion';
import CloseIcon from '@mui/icons-material/Close';

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xl'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button size="small" variant="text" onClick={handleClickOpen}>
      <SidebarRow src='https://source.unsplash.com/random' firstName='John' lastName="Doe"/>
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
       
        <DialogActions>
        <Button autoFocus onClick={handleClose}>
          <CloseIcon />
            Close
          </Button>
          </DialogActions>
        <DialogContent>
        
   <Discussion />
         
        </DialogContent>
        
      </Dialog>
    </div>
  );
}
