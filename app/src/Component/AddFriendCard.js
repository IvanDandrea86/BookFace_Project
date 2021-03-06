import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function AddFriendCard(props) {
  
  const image= "https://picsum.photos/id/" + Math.floor(Math.random()*1000) + "/600/400/"
  
  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia
        component="img"
        alt="photo"
        height="140"
        image={image}
      />
      <CardContent>
      <Typography gutterBottom variant="subtitle2" component="div">
          {props.lastname}
        </Typography>
        <Typography gutterBottom variant="title1" component="div">
          {props.firstname}
        </Typography>
        
      </CardContent>
      <CardActions sx={{display:"flex", justifyContent: "center", flexDirection:"column", width:"100%"}}>
        {props.bouton}
        {props.button}
      </CardActions>
    </Card>
  );
}
