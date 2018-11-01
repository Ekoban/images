<template>
    <div class="ui secondary pointing menu">
        <a href="/" class="active item">
        Image Storage
        </a>

        <div class="right menu">
            <a href="#" class="ui item" @click="login">
                Login    
            </a>
        </div>
        
    </div>
</template>

<script>
import { mapActions } from 'vuex'; // une fonction qui connecte les actions aux components

export default {
  name: 'AppHeader',
  methods: mapActions(['login']) // actions Vuex - la notation ... est utilisée au cas où on veuille ajouter d'autres méthodes
};
</script>

<style scoped>
</style>
