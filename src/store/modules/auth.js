import api from '../../api/imgur';
import qs from 'qs';

const state = {
    token: null
};

const getters = {
    isLoggedIn: state => !!state.token
};


const actions = {
    login: () => {
        api.login();
    },
    logout: ({ commit }) => {
        commit('setToken', null);
    }
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