const state = {
    token: null;
};

const getters = {
    isLoggedIn: (state) => { //le state est ici un argument: il change et est updaté au cours du temps
        return !!state.token  // !! transforme une valeur en booléen: si null, renvoie false; si une string, renvoie true
    }
};

const mutations = {

};

const actions = {

};