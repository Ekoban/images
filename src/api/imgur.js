import qs from 'qs';

const CLIENT_ID = '76c2ee577caa2a8';
const ROOT_URL = 'https://api.imgur.com';

export default {
    login() {
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token'
        };  // pour utiliser la bibliothèque QS
    
    window.location = `${ROOT_URL}/oath2/authorize?${qs.stringify(querystring)}`;
        //fait naviguer le browser vers cette url
    }
};

