<template>
    <div class="ui secondary pointing menu">
        <a href="/" class="active item">
        Image Storage
        </a>
        
        <div class="right menu">
            <div v-if="isLoggedIn" class="horizontal">
                <a class="item" href="">Galleries</a>
                <a class="item" href="">Upload</a>
                <a class="item" href="#" @click="logout">Logout</a>
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

