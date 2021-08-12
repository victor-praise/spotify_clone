export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
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