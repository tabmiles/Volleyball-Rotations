<template>
  <div class="rotation-wrapper">
    <Court
      v-for="(player, index) in playerRotations"
      :key="index"
      :players="player"
      class="court"
    />
  </div>
</template>

<script>
import { store } from "@/store";
import Court from "./Court.vue";

export default {
  name: "Rotations",
  components: {
    Court,
  },
  data() {
    return {
      playerRotations: [],
      players: [],
    };
  },
  methods: {
    buildPlayerRotations() {
      this.playerRotations = [];
      this.players = store.getPlayers();
      for (let i = 0; i < this.players.length; i++) {
        const rotation = this.players.slice(i).concat(this.players.slice(0, i));
        this.playerRotations.push(rotation);
      }
      console.log(this.playerRotations, this.players);
    },
  },
};
</script>

<style scoped>
.court {
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  width: 50%;
}
</style>
