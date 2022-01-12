import {useQuery,gql} from '@apollo/client';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage' 

const FINDBYID =gql `
query($user_id:String!)
 {findUserById(user_id: $user_id)
{
  lastname
firstname}}
`;

export function ConvertID(param) {
    const { data,loading,error } = useQuery(FINDBYID,{
        user_id: "61ddbfbfe2eea6baa5c55619"
    })
    if (loading) return <Loading />;
    if (error) return <ErrorMessage />;


    return {
        lastname:data.findUserById.firsname,
        firstname:data.findUserById.firsname
    }
    
}
