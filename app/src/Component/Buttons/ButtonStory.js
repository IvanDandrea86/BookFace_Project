import  React, {useState,useContext} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PanoramaIcon from '@mui/icons-material/Panorama';
import {
  useMutation,
  gql
} from "@apollo/client";
import Loading from '../../Util/Loading';
import ErrorMessage from '../../Util/ErrorMessage'
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../Context/auth-context';

const ADDPOST_MUT = gql`
  mutation (
    $userId: String!
    $content: String!
  
  ){addPost(userId:$userId,content:$content){
  _id
}}
`;

export default function ButtonStory() {
  const history=useHistory()
  const context=useContext(AuthContext)

  const [register ] = useMutation(ADDPOST_MUT);
  const [text,setText]=useState()  
  const [open, setOpen] = useState(false);
  
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAdd = () => {
    const  {data, loading, error}=  register(
      {
        variables:{
          content:text,
          userId:context.auth
      },
     })

     if (loading) return <Loading/>
     if (error) return <ErrorMessage/>
     history.push('/myprofile')
     history.go(+1);
     window.location.reload(false);
  }

  return (
    <div>
      <Button variant="contained" startIcon={<PanoramaIcon />} sx={{mixBlendMode: 0.5, width: "100%" }} onClick={handleClickOpen}>
        New story
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>What's new in your life?</DialogTitle>
        <DialogContent>
          <TextField
          onChange={(e)=>setText(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="Your story"
            variant="standard"
            value={text}   
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add story</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
