import {
    useQuery,
    gql
  } from "@apollo/client";
  import {client} from './createApolloClient';
  const ME =gql`
{whoAmI{
  _id
}}`;
client.query({
    query:ME
  }).then((response) => console.log(response.data))
  .catch((err) => console.error(err));
  export  function IsAuth(){
    const { loading, error, data } = useQuery(ME);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  return <div >
  <p>
     
    {console.log(data.whoAmI._id), 
    console.log("User Authenticated")}
  </p>
  </div>
  }