import { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import Login from './components/Login';
import Player from './components/Player';
import { getTokenFromUrl } from './components/spotify';
import { useDataLayerValue } from './helper/DataLayer';

function App() {
  const spotify = new SpotifyWebApi();
  const [{token}, dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
      dispatch({
        type:'SET_TOKEN',
        token: _token
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then( user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })
    }
  }, [])

  return (
    
    <div className="App">
      {
        token ? (<Player/>): (<Login/>)
      }
    
    </div>
  );
}

export default App;
