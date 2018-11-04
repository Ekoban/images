<template>
    <div>
        <img v-for="image in allImages" v-bind:src="image.link" >
    </div>
</template>

// v-bind (ou :) à chaque fois qu'on veut passer une propriété html (source ou autre)

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'ImageList',
    computed: mapGetters(['allImages']),
    //computed to read info
    methods: mapActions(['fetchImages']),
    created() {//appelée automatiquement
        this.fetchImages();
    }
};
</script>
