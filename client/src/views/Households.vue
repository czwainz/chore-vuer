<template>
  <div class="home">
    <router-link to="/">
      <h4>CHORE &nbsp;
        <img alt="Vue logo" src="../assets/logo.png" class="favicon-style">UER</h4>
    </router-link>
  </div>
</template>

<script>
  // @ is an alias to /src
  import households from '@/views/households'

  export default {
    name: 'households',
    components: {
      households
    }
  }
</script>

<style>
  img.favicon-style {
    transform: translateY(-3px);
    height: 1em;
  }

  a {
    color: grey;
    text-decoration: none;
  }
</style>