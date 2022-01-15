import  React,{useContext, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ButtonLike from './Buttons/ButtonLike';
import Divider from '@mui/material/Divider';
import { useMutation, gql } from '@apollo/client';
import Loading from '../Util/Loading';
import ErrorMessage from '../Util/ErrorMessage'
import { AuthContext } from '../Context/auth-context';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const ADDCOMMENT=gql`mutation(
  $postId: String!
  $userId: String!
  $content: String!
  )
  {addComment(postId:$postId,userId:$userId,content:$content){
    _id
  }}`
export default function CommentPost({post}) {
  const history = useHistory();

  const context =useContext(AuthContext)
  
  const [content,setContent]=useState()
  const [addpost]=useMutation(ADDCOMMENT)
  
  const handleSubmit = (event)=>{
    event.preventDefault();
    const {data,loading,error}=addpost({variables:{
      postId:post,
      userId:context.auth,
      content:content
    }})
    if (loading) return <Loading/> ;
    if (error) return <ErrorMessage/> ;
   
    history.push("/home");
    history.go(+1);
    window.location.reload(false);


  }
  return (
    <Box
      component="form"
      sx={{
        display:"flex", justifyContent:"space-between", flexAlign:"row", width:"100%", alignContent:"flex-end"
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
       onChange={(e) => {
        setContent(e.target.value);
      }}
          sx={{m:1, width:"70%"}}
          id="outlined-textarea"
          placeholder="Placeholder"
          value={content}
        />
             <Button size="medium" type="submit"  value="like" aria-label="like" color="primary" sx={{m:1}}>
        <SendIcon />
      </Button>
            <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
            <ButtonLike />
      
    </Box>
  );
}
