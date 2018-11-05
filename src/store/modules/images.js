import api from '../../api/imgur';
// import qs from 'qs';
import { router } from '../../main'; // on peut donc utiliser le routeur sans forcer de reload complet de la page

const state = {
    images: []
};

const getters = {
    allImages: state => state.images,
};

const mutations = {
    setImages: (state, images) => { //2eme argument: images reçues
        state.images = images;
    }

};

const actions = {
    async fetchImages({ rootState, commit }) {
        const token = rootState.auth.token;
        //s'écrit aussi const { token } = rootState.auth;
        const response = await api.fetchImages(token);
        commit('setImages', response.data.data);
    },
//commit permet d'appeler une mutation dans une action
//rootState est une référence à tout le state dans notre store
//nous permet donc d'accéder à la data des autres modules!

    async uploadImages({ rootState }, images) {
        //Get the access token
        const { token } = rootState.auth;
        
        //Call imgur API and upload list of images
        await api.uploadImages(images, token);

        //Redirect our user to ImageList component
        router.push('/')
    }

};


export default {
    state,
    getters,
    mutations,
    actions
};