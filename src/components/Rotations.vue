<template>
  <div class="rotation-wrapper">
    <button
      class="buildRotationsButton"
      @click="buildPlayerRotations()">
      <!-- TODO: update button title if rotations have already been built -->
      <span :class="[numPlayers>1 ? 'enabled' : 'disabled']">Build Rotations</span>
    </button>
    <div v-for="(players, index) in playerRotations" :key="index">
      Rotation {{ index + 1 }}
      <Court
        :players="players"
        class="court"
        :class="[numPlayers===2 ? 'two-player' : numPlayers===3 ? 'three-player' : numPlayers===4 ? 'four-player' : numPlayers===5 ? 'five-player' : numPlayers===6 ? 'six-player' : '']"
      />
    </div>
  </div>
</template>

<script>
import { store } from "@/store";
import Court from "./Court.vue";
import { EventBus } from "@/shared/eventBus";

export default {
  name: "Rotations",

  components: {
    Court,
  },

  data() {
    return {
      playerRotations: [],
      players: [],
      numPlayers: 0
    };
  },
  
  methods: {
    buildPlayerRotations() {
      // TODO: handle 3 person rotation
      this.playerRotations = [];
      this.players = store.getPlayers();
      for (let i = 0; i < this.players.length; i++) {
        const rotation = i===0 ? this.players : this.players.slice(this.players.length-i).concat(this.players.slice(0, -i));
        this.playerRotations.push(rotation);
      }
      console.log(this.playerRotations, this.players);
    },
  },

  mounted() {
    EventBus.on('playerUpdate', (players) => {
      this.numPlayers = players.length;
    })
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
.disabled {
  opacity: .5;
  pointer-events: none;
}

.enabled {
  opacity: 1;
}
</style>
