<template>
  <StartingLineup />
  <Rotations ref="rotations" />
</template>

<script>
import StartingLineup from "./components/StartingLineup.vue";
import Rotations from "./components/Rotations.vue";

export default {
  name: "App",

  components: {
    Rotations,
    StartingLineup,
  },

  methods: {
  },
  
  mounted() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
