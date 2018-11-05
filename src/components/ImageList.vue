<template>
    <div>
        <div v-if="isLoggedIn" class="image-container">
            <img v-for="image in allImages" :src="image.link">
        </div>
        <h2 v-else> Log in to get started ! </h2>
    </div>
<!-- // v-bind (ou :) à chaque fois qu'on veut passer une propriété html (source ou autre) -->
</template>


<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'ImageList',
    computed: mapGetters(['allImages', 'isLoggedIn']),
    //computed to read info
    methods: mapActions(['fetchImages']),
    created() {//appelée automatiquement
        this.fetchImages();
    }
};
</script>

<style scoped>
.image-container {
    column-count: 3;
    column-gap: 0;
}

img {
    max-width: 100%;
    padding: 5px;
}
</style>

