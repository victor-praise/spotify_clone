export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    discover_weekly: null,
    top_artists: null,
    spotify: null,
    curr_playing: null,
    recently_played: null,
    playback: '',
    is_playing: false,
    sound: null,
    top_tracks: null,
    volume: 50,
    searchMusic: null
};

const reducer = (state,action) => {
    //console.log(action);
    switch (action.type) {
        case 'SET_USER': 
            return { ...state, user: action.user };
        case 'SET_TOKEN': 
            return { ...state, token: action.token };
        case 'SET_PLAYLISTS': 
            return { ...state, playlists: action.playlists };
        case 'SET_CURRENTPLAYING':
             return { ...state, curr_playing: action.curr_playing };
        case "SET_DISCOVER_WEEKLY":
            return {...state, discover_weekly: action.discover_weekly,
            };
        case "SET_PLAYING":
            return {  ...state, playing: action.playing,};
        case "SET_ITEM":
            return {...state, item: action.item,};
        case "SET_TOP_ARTISTS":
            return {...state, top_artists: action.top_artists,
            };
        case "SET_SPOTIFY":
            return {...state, spotify: action.spotify,
            };
        case 'RECENTLY_PLAYED': 
            return { ...state, recently_played: action.recently_played };
        case 'PLAYBACK': 
            return { ...state, playback: action.playback };
        case 'PLAY':
             return { ...state, is_playing: action.is_playing };
        case 'SET_SOUND':
             return { ...state, sound: action.sound };
        case 'SET_TOPTRACKS':
             return { ...state, top_tracks: action.top_tracks };
        case 'SET_VOLUME':
             return { ...state, volume: action.volume };
        case 'SEARCH_MUSIC':
             return { ...state, searchMusic: action.searchMusic };
        default: return state;
    }
}
export default reducer