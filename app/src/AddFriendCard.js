import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function AddFriendCard(props) {
  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://source.unsplash.com/random"
      />
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div">
          {props.name}
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex", justifyContent:"end"}}>
        {props.bouton}
      </CardActions>
    </Card>
  );
}
