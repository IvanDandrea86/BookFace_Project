import React, {createContext } from "react";
import {useQuery,gql} from '@apollo/client';
import Loading from '../Util/Loading';
import ErrorMessage from '../Util/ErrorMessage' 

// query is the state
// SearchHandler is a function for changing the state.
export const AuthContext = createContext();
const IS_ME =gql `
 {whoAmI{_id}}
`;

// Defining a simple HOC component
const AuthContextProvider = (props) => {
const { data,loading,error } = useQuery(IS_ME)
if (loading) return <Loading />;
if (error) return <ErrorMessage />
if(data.whoAmI !=null){
  return (
    <AuthContext.Provider
      value={{ auth: data.whoAmI._id }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
else{
    return (
        <AuthContext.Provider
          value={{ auth: false }}
        >
          {props.children}
        </AuthContext.Provider>
      );
}
};

export default AuthContextProvider;








