import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main'; // on peut donc utiliser le routeur sans forcer de reload complet de la page

const state = {
    token: window.localStorage.getItem('imgur_token')
};

const getters = {
    isLoggedIn: state => !!state.token,
    whatsToken: state => state.token
};


const actions = {
    login: () => {
        api.login();
    },

    finalizeLogin: ({ commit }, hash) => {
        const query = qs.parse(hash.replace('#', ''));

        commit('setToken', query.access_token);
        window.localStorage.setItem('imgur_token', query.access_token);
        router.push('/')
    },

    logout: ({ commit }) => {
        commit('setToken', null);
        window.localStorage.removeItem('imgur_token');
    },

};

const mutations = {
    setToken: (state, token) => {
        state.token = token; // on met à jour une valeur simple avec le deuxieme argument
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};