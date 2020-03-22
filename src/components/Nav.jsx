import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {

 
    return(
        <div className="nav">

            <NavLink to="/"> Home </NavLink>
            <NavLink to="/myProfile"> MyProfile </NavLink>
            <NavLink to="followers"> MyFollowers </NavLink>

        </div>
    )
}

export default Nav;