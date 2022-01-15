import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OneComment from './OneComment';
import {gql,useQuery}from '@apollo/client'
import Loading from '../Util/Loading';
import ErrorMessage from '../Util/ErrorMessage'

const COMMENTBYPOST_MUT=gql`
query($post_id:String!)
  {findCommentByPost(post_id:$post_id){
    user_id
    content}}

`

export default function ChatPost({idpost})
{
const  {data,loading,error}=useQuery(COMMENTBYPOST_MUT,{
    variables:{
      post_id:idpost
    }
  })
  if (loading) return <Loading/> ;
  if (error) return <ErrorMessage/> ;

  return (
    
      <Accordion sx={{width:"100%"}}>
        <AccordionSummary
        sx={{width:"100%", border:"none", justifyContent:"center" }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            
          <Typography>See all comments</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {data.findCommentByPost.map((val)=>
          <OneComment comment={val}/>
          
          )}
        </AccordionDetails>
      </Accordion>

  );
}
