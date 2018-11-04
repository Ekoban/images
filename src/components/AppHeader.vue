<template>
    <div class="ui secondary pointing menu">
        <router-link to="/" class="active item">
        Image Storage
        </router-link> 
        <!-- router link à la place de anchor pour éviter le full page reload -->
        <div class="right menu">
            <div v-if="isLoggedIn" class="horizontal">
                <router-link to="/" class="item" >Galleries</router-link>
                <router-link to="/upload" class="item" >Upload</router-link>
                <a class="item" @click="logout">Logout</a>
            </div>
            
            <a v-else href="#!" class="ui item" @click="login">
                Login    
            </a>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'; 
// une fonction qui connecte les actions et getters aux components

export default {
  name: 'AppHeader',
  computed: mapGetters(['isLoggedIn', 'whatsToken']),
  methods: mapActions(['login', 'logout'])
  // getters et actions Vuex - 
  // la notation ...mapGetters est utilisée au cas où on veuille ajouter d'autres méthodes
};
</script>

<style scoped>
.horizontal {
    display: flex;
    flex-direction: row;
 }
</style>

