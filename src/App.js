import { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import Login from './components/Login';
import Player from './components/Player';
import { getTokenFromUrl } from './components/spotify';
import { useDataLayerValue } from './helper/DataLayer';

function App() {
  const s = new SpotifyWebApi();
  const [{ token }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      s.setAccessToken(_token);

      s.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })

      s.getUserPlaylists().then((playlists => {
        //console.log(playlists);
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
      }))

      s.getPlaylist('37i9dQZEVXcQTGVVW36vUC').then(
        response => {
          dispatch({
            type: 'SET_DISCOVER_WEEKLY',
            discover_weekly: response,
          })
        }
      )

      s.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

    }
  }, [token, dispatch])

  return (

    <div className="App">
      {
        token ? (<Player spotify={s} />) : (<Login />)
      }

    </div>
  );
}

export default App;
