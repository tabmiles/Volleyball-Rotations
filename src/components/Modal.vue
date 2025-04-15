<template>
  <div v-if="showModal" class="modal-wrapper">
    <div class="modal-content">
      <div v-if="type === 'addPlayer'">
        <input
          type="text"
          ref="playerNameInput"
          @keypress="handleKeyPress"
          v-model="playerName"
          placeholder="Enter player name"
          class="player-input"
        />
      </div>
      <div v-else-if="type === 'removePlayer'">
        Do you want to remove {{ data.name }}?
      </div>
      <div v-else-if="type === 'editPlayer'">
        <input
          type="text"
          ref="playerNameInput"
          @keypress="handleKeyPress"
          v-model="playerName"
          placeholder="Enter player name"
          class="player-input"
        />
      </div>
      <button
        class="cancelButton"
        ref="cancelButton"
        @click="handleCancellation"
      >
        Cancel
      </button>
      <button
        class="confirmButton"
        ref="confirmButton"
        @click="handleConfirmation"
      >
        OK
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rotations",
  data() {
    return {
      showModal: false,
      playerName: "",
      type: "",
      data: {},
    };
  },
  methods: {
    handleConfirmation() {
      if (!this.validatePlayerName()) return;
      this.$emit("modalConfirmation", this.playerName);
      this.playerName = "";
      this.showModal = false;
    },
    handleCancellation() {
      this.$emit("modalCancellaction");
      this.playerName = "";
      this.showModal = false;
    },
    handleKeyPress(event) {
      if (event.key === "Enter") {
        this.handleConfirmation();
      } else if (event.key === "Escape") {
        this.handleCancellation();
      }
    },
    handleShowModal(data) {
      this.populateModalData(data);
      this.showModal = true;
      if (this.type === "addPlayer" || this.type === "editPlayer") {
        this.$nextTick(() => {
          this.$refs.playerNameInput.focus();
        });
      }
      if (this.type === "removePlayer") {
        this.$nextTick(() => {
          this.$refs.cancelButton.focus();
        });
      }
    },
    populateModalData(data) {
      this.data = data.data;
      this.type = data.type;
    },
    validatePlayerName() {
      // TODO: put validation into store
      // TODO: validate no repeated names
      if (this.playerName == "") {
        alert("Please enter a player name.");
        return false;
      }
      return true;
    },
  },
};
</script>

<style scoped>
.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.player-input {
  padding: 10px;
  border-radius: 5px;
  border: none;
  width: 200px;
}
.confirmButton {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.cancelButton {
  padding: 10px 20px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  /* height: 50%; */
}
</style>
