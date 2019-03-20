<template>
  <div class="list row justify-content-around d-flex ">
    <div class="card shadow-sm my-2 mx-3 cardClass" v-for="list in lists">
      <h6> {{list.title}} </h6>
    </div>
    <div class="col-12 form-group">
      <form @submit.prevent="addList">
        <input type="text" v-model="newList.title" class="form-control my-1 shadow-sm" placeholder="Member Name">
        <input type="text" v-model="newList.description" class="form-control my-1 shadow-sm" placeholder="Description">
        <button type="submit" class="btn btn-info my-1 shadow-sm">Add New Member</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list',
    data() {
      return {
        newList: {
          title: '',
          description: '',
          householdId: this.$route.params.householdId
        }
      }
    },
    // mounted() {
    //   this.$store.dispatch('getLists', this.$route.params.householdId)
    // },
    computed: {
      lists() {
        return this.$store.state.dataStore.lists
      }
    },
    methods: {
      addList() {
        this.$store.dispatch('addList', this.newList)
      }
    }
  }


</script>

<style>
  .cardClass {
    width: 10rem;
    height: 18rem;
    max-width: 18rem;
    max-height: 18rem;
  }
</style>