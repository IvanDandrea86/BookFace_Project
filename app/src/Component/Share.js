import { Avatar} from '@mui/material';
import  React, {useState,useContext} from 'react';
import { useHistory } from "react-router-dom";
import './Share.css';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import PublishIcon from '@mui/icons-material/Publish';
import { AuthContext } from '../Context/auth-context';
import {
    useMutation,
    gql
  } from "@apollo/client";
  import ErrorMessage from '../Util/ErrorMessage'
import Loading from '../Util/Loading';

const ADDPOST_MUT = gql`
  mutation (
    $userId: String!
    $content: String!
  
  ){addPost(userId:$userId,content:$content){
  _id
}}
`;

function Share ({ profilePic, firstname,lastname }) 
{
    const history = useHistory();
    const context=useContext(AuthContext)
    const [register] = useMutation(ADDPOST_MUT);
    const [text,setText]=useState()  
    
    const handleAdd = () => {
        const {data,loading,error}= register(
          {
            variables:{
              content:text,
              userId:context.auth
          },
         }
         )
         if (loading) return <Loading/>
         if (error) return <ErrorMessage/> 
         if(data !=null){

            }
            history.push('/home')
            history.go(+1);
            window.location.reload(false);
        
         
      };
    return (
             
        <Grid container sx={{width: "100%", justifyContent: "center", alignItems: "center"}}>
            <div item className='share' sx={{width: "100%", flexDirection:"column", flexWrap:"wrap", justifyContent: "center", alignItems: "center"}} >
            
                <div className="share_top" sx={{flexDirection:"column", flexWrap:"wrap", justifyContent: "center"}}>
                    <Avatar src={profilePic}
                        className="share_avatar" />
                    <div className="share_topInfo">
                        <h3>{firstname} {"  "}  {lastname}</h3>
                         
                    </div>

                </div>
                <div className="share_bottom" sx={{display: "flex", flexDirection:"column", flexWrap:"wrap", justifyContent: "center"}}>
                   <form item sx= {{mb: 1,  display: 'flex', flexDirection: 'row' , alignItems: 'center', flexwrap: 'wrap', justifyContent:"space-between"}}>
                    <input sx={{display:"flex", flexwrap:"wrap"}}
                    className='share_input' placeholder={"Hey "+firstname+" what's on your mind?"}
                    value={text}
                    onChange={(e)=>setText(e.target.value)}>
                    </input>

                   </form>
                </div>

                <Divider />

    
                    <Grid container className="options" sx={{width:"100%", display: "flex", flexDirection:"row", justifyContent:"space-between",}}>
                    <Grid item sx={{ ml:1, display: "flex", justifyContent:"flex-start", flexDirection:"row", alignItems:"center"}}>
                    </Grid>
                        <Grid item sx={{display: "flex", flexDirection:"row", flexWrap:"wrap", justifyContent: "flex-end"}}>
                        <IconButton onClick={handleAdd} size="small" sx={{  m: 0.5, bgcolor: "#1E90FF", justifyContent: "center", marginRight:2}}>
                            
                            <PublishIcon  sx={{ m:1, width: 16, height:"auto", justifyContent: "flex-end", fill: "white", }}/>
                            </IconButton>
                        </Grid>
                    </Grid>

                
            </div>
        </Grid>

    );
}

export default Share;
