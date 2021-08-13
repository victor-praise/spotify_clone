export const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'https://spotify-clone-67e8e3.netlify.app/';
const cliendId = '98b937b360c64655a50c0f447339b7ac';
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
}
export const loginUrl = `${authEndpoint}?client_id=${cliendId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
//getTokenFromUrl();