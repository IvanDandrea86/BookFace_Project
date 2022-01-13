import React, {useState,createContext } from "react";
import {useQuery,gql} from '@apollo/client';
import Loading from '../Util/Loading';
import ErrorMessage from '../Util/ErrorMessage' 
// User is the state
// SearchHandler is a function for changing the state.
export const UserContext = createContext();
const FINDBYID = gql `
query($user_id:String!) {
findUserById(user_id: $user_id){
        email
        lastname
        firstname
        createdAt
        friendList
        }
}`
// Defining a simple HOC component
const UserContextProvider = (props) => {
  const [user, setUser] = useState("");

  const UserHandler = (user) => {
    const { data,loading,error } = useQuery(FINDBYID,{variables:{
        user_id:user
    }})
    if (loading) return <Loading />;
    if (error) return <ErrorMessage />
    if(data.whoAmI !=null){
    };
  setUser(data)
}

  return (
    <UserContext.Provider
      value={{ user: user.findUserById , UserHandler: UserHandler }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;