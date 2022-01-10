
import {useQuery,gql} from '@apollo/client';
export 
const IS_ME =gql `
 {whoAmI{_id}}
`;
export function useAuth() {
    const { data } = useQuery(IS_ME)
    console.log(data)
    return {
    isMe:data.whoAmI._id
    }
}