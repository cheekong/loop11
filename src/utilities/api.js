import axios from 'axios';
//const axiosInstsance = axios.create({baseURL:'https://test-api.loop11.com'});

//note that base URL is set as proxy in package.json to bypass CORS issue when starting app on local. 
const axiosInstsance = axios.create();
export const getChannelList = () => axiosInstsance.get('v1/slack/');
export const shareToChannel = (channelName) => axiosInstsance.post('/v1/slack/', {channel: channelName});