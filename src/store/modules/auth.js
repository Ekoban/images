import api from '../../api/imgur';
import qs from 'qs';

const state = {
    token: null
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
    },

    logout: ({ commit }) => {
        commit('setToken', null);
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