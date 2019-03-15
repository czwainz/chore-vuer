<template>
  <div class="household row">
    <div class="col-12">
      <h3>{{activeHousehold.title}}</h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'household',
    mounted() {
      this.$store.dispatch('getOneHousehold', this.$route.params.householdId)
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
    props: ['house']
  }

</script>

<style>


</style>