import { useQuery, gql} from '@apollo/client';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage'

const FINDBYID = gql `
query($user_id:String!)
 {findUserById(user_id: $user_id)
{email
  lastname
firstname
friendList}}
`;
export function ConvertID({id}) {
    const { loading, error, data } = useQuery(FINDBYID,{
        variables:{
            user_id: id
        }
    });
  
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    return (
      <p>{data.firstname}</p>
    );
  }