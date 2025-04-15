<template>
  <Players @updatePlayers="handlePlayers" />
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
  // data() {
  //   return {
  //     players: [],
  //   };
  // },
  methods: {
    handlePlayers(players) {
      store.setPlayers(players);
      if (store.players.length === 6) {
        this.$refs.rotations.buildPlayerRotations();
      } else if (store.players.length < 6) {
        this.$refs.rotations.playerRotations = [];
      }
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
