<template>
  <div v-if="playerRotations.length>2" class="rotation-wrapper">
    <div class="rotation-title">Showing Rotations for {{ playerRotations.length }} players</div>
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
      this.playerRotations = [];
      this.players = store.getPlayers();
      this.numPlayers = this.players.length;
      let rotations = [];
      if (this.numPlayers === 3) {
        for (let j = 0; j < this.players.length; j++) {
          const rotation = this.players.slice(j).concat(this.players.slice(0, j));
          rotations.push(rotation);
        }
      } else {
        for (let i = 0; i < this.players.length; i++) {
          const rotation = i===0 ? this.players : this.players.slice(this.players.length-i).concat(this.players.slice(0, -i));
          rotations.push(rotation);
        }
      }
      this.$nextTick(() => this.playerRotations = rotations );
    },
  },

  mounted() {
    EventBus.on('playerUpdate', () => {
      this.$nextTick(() => { this.buildPlayerRotations() });
    })
  },

  unmounted() {
    EventBus.off('playerUpdate');
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
