import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddCommentIcon from '@mui/icons-material/AddComment';
import Divider from '@mui/material/Divider';
import CommentPost from './CommentPost';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OneComment from './OneComment';

export default function ChatPost() {
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
          
          <OneComment />

        </AccordionDetails>
      </Accordion>

  );
}
