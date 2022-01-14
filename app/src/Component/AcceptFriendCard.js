import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useQuery,gql} from '@apollo/client';
import Loading from '../Util/Loading';
import ErrorMessage from '../Util/ErrorMessage'


const SENDERIDENTITY =gql `
 query($user_id:String!) {
    findUserById(user_id:$user_id)
    {_id
    lastname
    firstname
    }
}
`;

export default function AcceptFriendCard({props, datasender}) {
  
  const image= "https://picsum.photos/id/" + Math.floor(Math.random()*1000) + "/600/400/"

  const { loading, error, data } = useQuery(SENDERIDENTITY, {
    variables: {
        user_id: datasender.userSender
    }
    });
    if (loading) return <Loading/> ;
    if (error) return <ErrorMessage/> ;
  
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
          {data.findUserById.lastname}
        </Typography>
        <Typography gutterBottom variant="title1" component="div">
          {data.findUserById.firstname}
        </Typography>
        <Typography gutterBottom variant="title1" component="div">
          {props.status}
        </Typography>
        
      </CardContent>
      <CardActions sx={{display:"flex", justifyContent: "center", flexDirection:"column", width:"100%"}}>
        {props.bouton}
        {props.button}
      </CardActions>
    </Card>
  );
}
