
import { useQuery } from "urql";

const ME=`
{whoAmI{
    _id
}}
`

export const UseIsAuth = () => {
  const [data] = useQuery({
     query:ME
  });
 
  console.log("auth",data.whoAmI)
  
};