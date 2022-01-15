import React,{useContext} from 'react';
import BannerProfile from '../../Component/Buttons/BannerProfile'
import MyInfo from '../../Component/MyInfo'
import MyProfilePicture from '../../Component/MyProfilePicture'
import MyPosts from '../../Component/MyPosts'
import { useQuery, gql } from '@apollo/client';
import Loading from '../../Util/Loading';
import ErrorMessage from '../../Util/ErrorMessage'
import { AuthContext } from '../../Context/auth-context';

const FINDBYID = gql `
query($user_id:String!) {
findUserById(user_id: $user_id){
        email
        lastname
        firstname
        createdAt
        friendList
        messagesRecived
        }
findPostByUser(user_id:$user_id)
{
    _id
    content
    createdAt
    comments
    
  }
}
`
function MyProfile() {
    const context=useContext(AuthContext)
    const { loading, error, data } = useQuery(FINDBYID, {
        variables: {
            user_id: context.auth
        }
    });
    if (loading) return <Loading/> ;
    if (error) return <ErrorMessage/> ;

    return (
        <div className='profile'>
            {/** Ici ira le banner: pour le moment couleur/ on verra photo plus tard */}
            <BannerProfile />
            {/** Photo de profil + picto photo + nom + buttons "add story" + "modify my profile" */}
           <MyProfilePicture data={data}/> 
            {/** Some general info of the guy with pictos */}
            <MyInfo />
            {/** Storys in chronogical order */}
            <MyPosts data={data} post={data.findPostByUser}/>
        </div>
    )
}

export default MyProfile
