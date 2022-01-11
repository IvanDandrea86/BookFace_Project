
import {useQuery,gql} from '@apollo/client';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage' 

const IS_ME =gql `
 {whoAmI{_id}}
`;
export function Auth() {
    const { data,loading,error } = useQuery(IS_ME)
    if (loading) return <Loading />;
    if (error) return <ErrorMessage />;
    console.log(data)
    if(data){
    return {
    id:data.whoAmI._id
}
    }
}
