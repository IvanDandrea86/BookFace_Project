import React from 'react'
import BannerProfile from '../../Component/Buttons/BannerProfile'
import MyInfo from '../../Component/MyInfo'
import ProfilePicture from '../../Component/ProfilePicture'


function Profile() {
    console.log(this.props.match.params.id)
   
    return (
        <div className='profile'>
            <div>
        <h2>{this.props.match.params.id}</h2>
        </div>
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
