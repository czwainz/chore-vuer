<template>
  <div class="login container-fluid">
    <div class="row form-group justify-content-center">
      <div class="col-4">
        <form v-if="loginForm" @submit.prevent="loginUser">
          <input type="email" v-model="creds.email" placeholder="email" class="form-control">
          <input type="password" v-model="creds.password" placeholder="password" class="form-control">
          <button type="submit" class="btn btn-primary mt-1">Login</button>
        </form>
        <form v-else @submit.prevent="register">
          <input type="text" v-model="newUser.name" placeholder="name" class="form-control">
          <input type="email" v-model="newUser.email" placeholder="email" class="form-control mt-1">
          <input type="password" v-model="newUser.password" placeholder="password" class="form-control mt-1">
          <button type="submit" class="btn btn-primary mt-1">Create Account</button>
        </form>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-4 bg-info registerTag rounded pb-0 shadow">
        <div @click="loginForm = !loginForm">
          <p v-if="loginForm">No account? Click here to Register</p>
          <p v-else>Already have an account? Click here to Login</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        loginForm: true,
        creds: {
          email: "",
          password: ""
        },
        newUser: {
          email: "",
          password: "",
          name: ""
        }
      };
    },
    methods: {
      register() {
        this.$store.dispatch("register", this.newUser);
      },
      loginUser() {
        this.$store.dispatch("login", this.creds);
      }
    }
  };
</script>

<style>

</style>