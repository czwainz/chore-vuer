<template>
  <div class="container-fluid">
    <div class="household row justify-content-center d-flex align-items-center">
      <div class="col-12 text-center">
        <h4>{{activeHousehold.title}}</h4>
      </div>
    </div>
    <list></list>
    <div class="row align-self-end flex-column">
      <div class="col-12 justify-content-start d-flex">
        <button @click="deleteHousehold(activeHousehold._id)" class="btn btn-warning shadow border-warning">
          <i class="fas fa-dumpster-fire"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import list from '@/components/List.vue'

  export default {
    name: 'household',
    mounted() {
      this.$store.dispatch('getOneHousehold', this.$route.params.householdId)
      this.$store.dispatch('getLists', this.$route.params.householdId)
    },
    data() {
      return {

      }
    },
    computed: {
      activeHousehold() {
        return this.$store.state.dataStore.activeHouse
      },
      gifs() {
        return this.$store.state.dataStore.gifs
      }
    },
    methods: {
      deleteHousehold(id) {
        this.$store.dispatch('deleteHousehold', id)
      }
    },
    props: ['house'],
    components: {
      list
    }
  }

</script>

<style>


</style>