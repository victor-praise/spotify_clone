import React from 'react';
import { useEffect } from 'react';
import '../styles/player.css'
import Body from './Body';
import Footer from './Footer';
import Sidebar from './Sidebar';

function Player({spotify}) {
    
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar/>
                <Body spotify={spotify}/>
            </div>
            <Footer spotify={spotify}/>
        </div>
    )
}

export default Player
