import React from 'react'
import BannerProfile from '../../Component/Buttons/BannerProfile'
import MyInfo from '../../Component/MyInfo'
import MyProfilePicture from '../../Component/MyProfilePicture'


function MyProfile() {
   
    return (
        <div className='profile'>
            {/** Ici ira le banner: pour le moment couleur/ on verra photo plus tard */}
            <BannerProfile />
            {/** Photo de profil + picto photo + nom + buttons "add story" + "modify my profile" */}
            <MyProfilePicture />
            {/** Some general info of the guy with pictos */}
            <MyInfo />
            {/** Storys in chronogical order */}
        </div>
    )
}

export default MyProfile
