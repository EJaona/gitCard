import React from 'react';


const Profile = (props) => {

   

    return(
        <div className="profile">

            <img src={props.img_src} alt="profile pic"/>
            <h1>userName: {props.userName} </h1>
            <h2>Name: {props.name || props.userName} </h2>
            <p>Bio: {props.bio || 'No bioooo'} </p>

        </div>
    )
}

export default Profile;