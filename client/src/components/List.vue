<template>
  <div class="list row justify-content-center d-flex">
    <div class="card col-7 shadow-sm my-1" width="200px" max-height="200px" v-for="list in lists">
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


</style>