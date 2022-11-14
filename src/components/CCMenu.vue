<template>
  <div class="CCMenu">
    <div id="parent">
      <h3 id="Title">Test: Ékkövek könyve</h3>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CCMenu',
  components: {

  },
  computed: {
    getState() {
      return this.$store.getters.setSomeState;
    }
  },
  methods: {

  }
}
</script>

<style scoped>


</style>

