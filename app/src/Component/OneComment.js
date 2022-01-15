import React from 'react';
import { Avatar } from '@mui/material';
import {useQuery,gql} from '@apollo/client';
import Loading from '../Util/Loading';
import ErrorMessage from '../Util/ErrorMessage';
const User=gql `
 query($user_id:String!) {
    findUserById(user_id:$user_id)
    {lastname
    firstname
    createdAt 
    }
 }
`

function OneComment({comment}) {
    const { loading, error, data } = useQuery(User,{
        variables:{
            user_id:comment.user_id
        }
    });
    if (loading) return <Loading />;
    if (error) return <ErrorMessage />;
    return (
        <div className="post_top" sx={{flexDirection:"column", flexWrap:"wrap", justifyContent: "center"}}>
                    <Avatar src={"https://picsum.photos/id/" + Math.floor(Math.random()*1000) + "/800/600/"}
                        className="post_avatar" />
                    <div className="post_topInfo">
                        <h3>{data.findUserById.lastname}  {data.findUserById.lastname}</h3>
                        <p>{comment.content}</p>
                    </div>         
                </div>
    )
}

export default OneComment
