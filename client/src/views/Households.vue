<template>
  <div class="home container-fluid">
    <div class="row justify-content-end align-items-center vh-50 d-flex">
      <div class="col-12">
        <form @submit.prevent="addHousehold" class="form-group">
          <input type="text" placeholder="Household Name" class="form-control my-1" v-model="newHousehold.name">
          <input type="text" placeholder="Description" class="form-control my-1" v-model="newHousehold.description">
          <button type="submit" class="btn btn-info">Add Household</button>
        </form>
      </div>
    </div>

    <household />
  </div>
</template>

<script>
  // @ is an alias to /src
  import household from '@/components/Household.vue'

  export default {
    name: 'households',
    components: {
      household
    },
    data() {
      return {
        newHousehold: {
          name: "",
          description: ""
        }
      }
    },
    methods: {
      addHousehold() {
        this.$store.dispatch('addHousehold', this.newHousehold)
      }
    }
  }
</script>

<style>
  a {
    color: grey;
    text-decoration: none;
  }
</style>