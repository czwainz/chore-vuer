<template>
  <div class="gifs row">
    <div class="card col-3" v-for="gif in gifs">
      <img :src="gif.embed_url.images.preview_gif.url" alt="gif">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'gifs',
    data() {
      return {

      }
    },
    mounted() {
      this.$store.dispatch('getGifs')
    },
    computed: {
      gifs() {
        return this.$store.state.dataStore.gifs
      }
    },
    methods: {}
  }

</script>

<style>


</style>