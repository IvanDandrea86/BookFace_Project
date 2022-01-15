
import {  Grid,  ListItem,  ListItemText  } from '@mui/material';
import dayjs from 'dayjs';
import {useQuery,gql} from '@apollo/client';
import Loading from '../../Util/Loading';
import ErrorMessage from '../../Util/ErrorMessage'

const SENDERIDENTITY =gql `
 query($user_id:String!) {
    findUserById(user_id:$user_id)
    {_id
    lastname
    firstname
    }
}
`;

const Conversation=({message})=>
{
    const { loading, error, data } = useQuery(SENDERIDENTITY, {
        variables: {
            user_id: message.sender_id
        }
        });
        if (loading) return <Loading/> ;
        if (error) return <ErrorMessage/> ;
    return(


<ListItem key={message._id}>
                        <Grid container>
                        <Grid item xs={12}>
                                <ListItemText align="right" primary={data.findUserById.firstname+"   "+data.findUserById.lastname}></ListItemText>
                            </Grid>
                                <ListItemText align="right" secondary={dayjs(message.createdAt).format('DD MMMM YYYY, hh:mm:ss A')}></ListItemText>
                            <Grid item xs={12}>
                            </Grid>
                                <ListItemText align="right" primary={message.content}></ListItemText>
                            <Grid item xs={12}>
                            </Grid>
                        </Grid>
                    </ListItem>
                        )
                    }
                    export default Conversation;