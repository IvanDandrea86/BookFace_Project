import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonFriendCard from './ButtonFriendCard';

export default function AddFriendCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://source.unsplash.com/random"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          First Name Last Name
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex", justifyContent:"end"}}>
        {props.bouton}
      </CardActions>
    </Card>
  );
}
