import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main'; // on peut donc utiliser le routeur sans forcer de reload complet de la page

const state = {
    images: []
};

const getters = {
    allImages: state => state.images;
};

const mutations = {
    setImages: (state, images) => { //2eme argument: images reçues
        state.images = images;
    }

};

const actions = {

};


export default {
    state,
    getters,
    mutations,
    actions
};