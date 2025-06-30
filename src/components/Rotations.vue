<template>
  <div class="rotation-wrapper">
    <div v-for="(players, index) in playerRotations" :key="index">
      Rotation {{ index + 1 }}
      <Court
        :players="players"
        class="court"
      />
    </div>
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
