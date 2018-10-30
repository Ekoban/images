import api from '../../api/imgur';

const state = {
    token: null
};

const getters = {
    isLoggedIn: (state) => { //le state est ici un argument: il change et est updaté au cours du temps
        return !!state.token // !! transforme une valeur en booléen: si null, renvoie false; si une string, renvoie true
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token; // on met à jour une valeur simple avec le deuxieme argument
    },
};

const actions = {
    login: () => {
        api.login();
    },
    logout: ({ commit }) => {
        commit('setToken', null);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};