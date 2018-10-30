import qs from 'qs';

const CLIENT_ID = 'b6bc4f2de69f7d8';
const ROOT_URL = 'https://api.imgur.com';

export default {
    login() {
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token',
        };  // pour utiliser la bibliothèque QS
        window.location = `${ROOT_URL}/oath2/authorize?${qs.stringify(querystring)}`;
        console.log("Envoyé !")
        //fait naviguer le browser vers cette url
    }
};