<template>
  <div class="rotation-wrapper">
    PLAYERS
    <button
      @click="triggerModal('addPlayer')"
      ref="addPlayerButton"
      class="addPlayerButton"
    >
      Add Player
    </button>
    <ul>
      <li v-for="(player, index) in players" :key="index" class="player">
        {{ player.name }}
        <div class="playerButtons">
          <button
            @click="
              triggerModal('editPlayer', { name: player.name, index: index })
            "
            class="playerButton"
            id="editPlayerButton"
          >
            edit
          </button>
          <button
            @click="
              triggerModal('removePlayer', { name: player.name, index: index })
            "
            class="playerButton"
            id="removePlayerButton"
          >
            delete
          </button>
        </div>
      </li>
    </ul>
  </div>
  <Modal ref="PlayerModal" @modalConfirmation="handleModalConfirmation" />
</template>

<script>
import Modal from "./Modal.vue";

export default {
  name: "Rotations",
  components: {
    Modal,
  },
  data() {
    return {
      players: [],
      modalType: "",
      modalData: {},
      selectedPlayer: null,
    };
  },
  emits: ["updatePlayers"],
  methods: {
    triggerModal(modalType, data = null) {
      if (modalType === "addPlayer" && this.players.length === 6) return;
      this.modalType = modalType;
      if (modalType === "removePlayer" || modalType === "editPlayer") {
        this.modalData = data;
        this.selectedPlayer = data;
      }
      this.$refs.PlayerModal.handleShowModal({
        type: this.modalType,
        data: this.modalData,
      });
    },
    handleModalConfirmation() {
      switch (this.modalType) {
        case "addPlayer":
          this.addPlayer(this.$refs.PlayerModal.playerName);
          this.$refs.addPlayerButton.focus();
          break;
        case "removePlayer":
          this.removePlayer(this.selectedPlayer.index);
          break;
        case "editPlayer":
          this.editPlayer(
            this.selectedPlayer.index,
            this.$refs.PlayerModal.playerName
          );
          break;
      }
    },
    addPlayer(player) {
      this.players.push({ name: player });
      this.$emit("updatePlayers", this.players);
    },
    removePlayer(index) {
      this.players.splice(index, 1);
      this.$emit("updatePlayers", this.players);
    },
    editPlayer(index, player) {
      this.players[index].name = player;
      this.$emit("updatePlayers", this.players);
    },
  },
};
</script>

<style scoped>
li.player {
  list-style: none;
  padding: 10px;
  margin: 5px 0;
  background-color: #f0f0f0;
  border-radius: 5px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
li.player:hover {
  background-color: #dedede;
}
.playerButton {
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-left: 10px;
}
.playerButton:hover,
.playerButton:focus {
  cursor: pointer;
  background-color: lightblue;
}
.playerButton#removePlayerButton:hover,
.playerButton#removePlayerButton:focus {
  background-color: lightcoral;
}
</style>
