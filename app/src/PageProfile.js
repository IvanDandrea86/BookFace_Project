import React from 'react'
import BannerProfile from './BannerProfile'
import MyInfo from './MyInfo'
import ProfilePicture from './ProfilePicture'


function Profile() {
   
    return (
        <div className='profile'>
            {/** Ici ira le banner: pour le moment couleur/ on verra photo plus tard */}
            <BannerProfile />
            {/** Photo de profil + picto photo + nom + buttons "add story" + "modify my profile" */}
            <ProfilePicture />
            {/** Some general info of the guy with pictos */}
            <MyInfo />
            {/** Storys in chronogical order */}
        </div>
    )
}

export default Profile
