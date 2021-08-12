import React from 'react'
import '../styles/sidebar.css'
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../helper/DataLayer';
import { useEffect } from 'react';
function Sidebar() {
    const [{ playlists }] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify_logo" className="sidebar__logo"/>
            <SidebarOption Icon={HomeIcon} option="Home"/>
            <SidebarOption Icon={SearchIcon} option="Search"/>
            <SidebarOption Icon={LibraryMusicIcon} option="Your Library"/>
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map(playlist => (
                <SidebarOption option={playlist.name} />
            ))}
        </div>
    )
}

export default Sidebar
