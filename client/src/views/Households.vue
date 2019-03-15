<template>
  <div class="home container-fluid">
    <div class="row justify-content-end align-items-center vh-50 d-flex">
      <div class="col-12">
        <form @submit.prevent="addHousehold" class="form-group">
          <input type="text" placeholder="Household Name" class="form-control my-1" v-model="newHousehold.title">
          <input type="text" placeholder="Description" class="form-control my-1" v-model="newHousehold.description">
          <button type="submit" class="btn btn-info">Add Household</button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="card col bg-warning mx-3 pt-1" v-for="house in households"
        @click="$router.push({name: 'household', params: {householdId: house._id}})">
        <h4>{{house.title}}</h4>
      </div>
    </div>
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
    mounted() {
      this.$store.dispatch('getHouseholds')
    },
    data() {
      return {
        newHousehold: {
          title: "",
          description: ""
        }
      }
    },
    methods: {
      addHousehold() {
        this.$store.dispatch('addHousehold', this.newHousehold)
      }
    },
    computed: {
      households() {
        return this.$store.state.dataStore.households
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