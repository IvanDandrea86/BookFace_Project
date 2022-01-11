
import {useQuery,gql} from '@apollo/client';
import Loading from './Loading';
import {useQuery,gql} from '@apollo/client';
import ErrorMessage from './ErrorMessage';

import {Auth} from "./util/isAuthApollo";

const INFOS_USER_CONNECTED =gql `
query ($userid: string!) {
 {findUserById(user_id: $userid){
  _id
  firstname
  lastname
  email
  password
  messagesRecived
  messagesSent
  
}}
`;
export function Retrieve() {
    const user=Auth();
    const { data,loading,error } = useQuery(INFOS_USER_CONNECTED, 
        {variables: { 
        userid: user.id}}
     );
    if (loading) return <Loading />;
    if (error) return <ErrorMessage />;
    if(data.findUserById==null)
    return "undefined"
    else{
    return {
    id:data.findUserById._id,
    firstname:data.findUserById.firstname,
    lastname:data.findUserById.lastname,
    password:data.findUserById.password,
    messagesRevived:data.findUserById.messagesRecived,
    messagesSent:data.findUserById.messagesSent
    } }
}
