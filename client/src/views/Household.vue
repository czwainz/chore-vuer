<template>
  <div class="household row">
    <div class="card col">


    </div>
  </div>
</template>

<script>
  export default {
    name: 'household',
    mounted() {
      this.$store.dispatch('getOneHousehold', this.$route.params.id)
    },
    data() {
      return {

      }
    },
    computed: {
      activeHousehold() {
        return this.$store.state.dataStore.activeHousehold
      }
    },
    methods: {},
    props: ['householdData']
  }

</script>

<style>


</style>