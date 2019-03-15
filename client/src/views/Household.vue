<template>
  <div class="container-fluid">
    <div class="household row justify-content-center d-flex align-items-center">
      <div class="col-12 text-center">
        <h3>{{activeHousehold.title}}</h3>
      </div>
    </div>
    <list></list>
    <div class="row">
        <div class="col-12 justify-content-start d-flex py-1 px-1 border-warning">
          <i @click="deleteHousehold(house._id)" class="fas fa-dumpster-fire"></i>
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
      }
    },
    methods: {},
    props: ['house'],
    components: {
      list
    }
  }

</script>

<style>


</style>