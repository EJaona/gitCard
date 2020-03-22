import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Home from './components/Home';
import Follower from './components/Follower';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import FollowersList from './components/FollowersList';

function App() {

  const [userInfo, setUserInfo] = useState({})
  const [followersList, setFollowersList] = useState([])

  useEffect(() => {

    axios
      .get('https://api.github.com/users/ejaona')
      .then(res => setUserInfo(res.data))
      .catch(err => console.log(err))

  }, [])

  useEffect(() => {

    axios
      .get('https://api.github.com/users/ejaona/followers')
      .then(res => setFollowersList(res.data))
      .catch(err => console.log(err))
  }, [])



  return (
    <div className="App">

      <Nav />

      <Switch>

        <Route exact path='/' component={Home} />
        
        <Route path='/myProfile' render={ props =>

          <Profile 
          {...props}
            img_src={ userInfo.avatar_url } 
            userName={ userInfo.login }
            name={ userInfo.name }
            bio={ userInfo.bio }
          />
          
        } 
        />

        <Route exact path='/followers' render={props => <FollowersList {...props} followersArr={followersList} />} />

        <Route path='/followers/:name' render={props =>  <Follower {...props} followersArr={followersList} />} />
      </Switch>


    </div>
  );
}

export default App;
