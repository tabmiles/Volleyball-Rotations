<template>
  <Players @updatePlayers="handlePlayers" />
  <button
    class="buildRotationsButton"
    @click="$refs.rotations.buildPlayerRotations()">Build Rotations</button>
  <Rotations ref="rotations" />
</template>

<script>
import Players from "./components/Players.vue";
import Rotations from "./components/Rotations.vue";
import { store } from "./store";

export default {
  name: "App",
  components: {
    Rotations,
    Players,
  },

  methods: {
    handlePlayers(players) {
      store.setPlayers(players);
    },
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
