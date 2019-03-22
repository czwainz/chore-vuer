<template>
  <div class="gifs row justify-content-around d-flex">
    <div class="card col-3 gifCard my-1 mx-1" v-for="gif in gifs">
      <iframe :src="gif.embed_url"></iframe>
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
  .gifCard {
    height: 200px;
    width: 200px;
  }
</style>