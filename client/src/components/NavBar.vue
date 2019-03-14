<template>
  <div class="navBar container-fluid">
    <!--Navbar-->
    <nav class="navbar navbar-light row d-flex">

      <!-- Navbar brand -->
      <div class="col-10 d-flex justify-content-start">
        <router-link to="/">
          <h4>CHORE &nbsp;<img alt="Vue logo" src="../assets/logo.png" class="favicon-style">UER</h4>
        </router-link>
      </div>

      <!-- Collapse button -->
      <div class="col-2 d-flex justify-content-end">
        <button class="navbar-toggler toggler-example mr-3" type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false"
          aria-label="Toggle navigation"><span class="dark-blue-text"><i class="fas fa-bars fa-1x"></i></span></button>
      </div>


      <!-- Collapsible content -->
      <div class="collapse navbar-collapse rounded shadow" id="navbarSupportedContent1">

        <!-- Links -->
        <ul class="navbar-nav mr-auto">

          <li class="nav-item active">
            <a class="nav-link">
              <router-link :to="{path: '/'}" data-toggle="collapse" data-target="#navbarSupportedContent1"
                aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">Home
              </router-link>
            </a>
          </li>


          <div v-if="isLoggedIn()">
            <li class=" nav-item-active">
              <a class="nav-link" @click="logout">
                <router-link :to="{path: '/'}" data-toggle="collapse" data-target="#navbarSupportedContent1"
                  aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">Logout
                </router-link>
              </a>
            </li>

            <!-- <li class=" nav-item-active">
              <a class="nav-link">
                <router-link :to="{name: 'myDecks'}" data-toggle="collapse" data-target="#navbarSupportedContent1"
                  aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">My Decks
                </router-link>
              </a>
            </li> -->
          </div>

          <div class="d-flex justify-content-center" v-else>
            <li class="d-flex">
              <a class="nav-link">
                <router-link :to="{name: 'login'}" data-toggle="collapse" data-target="#navbarSupportedContent1"
                  aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">Sign In
                </router-link>
              </a>
            </li>
          </div>

        </ul>
      </div>
    </nav>
  </div>



</template>

<script>
  export default {
    name: 'navBar',
    data() {
      return {

      }
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      isLoggedIn() {
        return (this.user._id) ? true : false
      },
      logout() {
        this.$store.dispatch('logout')
      }
    },
    components: {
    }
  }
</script>

<style>

</style>