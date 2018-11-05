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

  fetchImages(token) {
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`
      } //second argument d'une req Axios
    })
  },

  uploadImages(images, token) {
      const promises = Array.from(images).map(image => {
        const formData = new FormData();
        formData.append('image', image); //prend la référence du fichier et l'attache
        //prend l'objet images et le transforme en Array, pour qu'on puisse utiliser map
        return axios.post(`${ROOT_URL}/3/image`, formData, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      }) 
      //nous renvoie "a promise that represents the upload request itself. 
      // So from this entire statement we're going to get an array of promises each of which represent one individual
      return Promise.all(promises);
      //on attend la complétion de chaque upload request pour continuer
    },

  };
