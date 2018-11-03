import qs from 'qs';
import axios from 'axios';

//b6bc4f2de69f7d8
const CLIENT_ID = 'b6bc4f2de69f7d8';
const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token'
    };

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      querystring
    )}`;
  },
  
};
