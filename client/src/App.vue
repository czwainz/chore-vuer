<template>
  <div id="app" class="container-fluid">
    <div class="nav justify-content-start d-flex mt-1">
      <navBar></navBar>
      <router-view />
    </div>
  </div>
</template>

<script>
  import navBar from '@/components/NavBar.vue'

  export default {
    name: 'app',
    components: {
      navBar
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    text-decoration: none;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  body {
    background-color: rgba(128, 128, 128, 0.214);
  }

  img.favicon-style {
    transform: translateY(-3px);
    height: 1em;
  }
</style>