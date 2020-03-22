import React, { useState, useEffect } from 'react';
import Profile from './Profile';

const Follower = (props) => {

    const [follower, setFollower] = useState({})

    useEffect(() => {

        setFollower(
            props.followersArr.find(follower => follower.login === props.match.params.name)
        )

    }, [])

    console.log(follower)


    return(
        <div className="follower">

            <Profile
                img_src={follower.avatar_url}
                name={follower.name}
                userName={follower.login}
                bio={follower.bio}
            
            />

        </div>
    )
}

export default Follower;