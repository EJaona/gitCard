import React from 'react';
import { Link } from 'react-router-dom';


const FollowersList = (props) => {

    return(
        <div className="followers-list">

            {props.followersArr.map(follower => (
                <div>

                    <Link to={`/followers/${follower.login}`}>
                        <img src={ follower.avatar_url } alt=""/>
                    </Link>

                    <h2>name: { follower.name || follower.login } </h2>
                </div>
            ))}

        </div>
    )
}

export default FollowersList;