<template>
  <div class="player-wrapper">
    <div class="title">Starting Lineup</div>
    <label for="playerNameInput">Name:</label>
    <input
      type="text"
      id="playerNameInput"
      ref="playerNameInput"
      @keypress="handleKeyPress"
      v-model="playerName"
      placeholder="Enter player name"
      class="player-input"
    />
    <label for="playerRoleInput">Role:</label>
    <select
      id="playerRoleInput"
      ref="playerRoleInput"
      v-model="playerRole"
      class="player-role-input"
    >
      <option value="">Select role (optional)</option>
      <option value="setter">Setter</option>
      <option value="outside-hitter">Outside (left) Hitter</option>
      <option value="opposite-hitter">Opposite (right) Hitter</option>
      <option value="middle-blocker">Middle Blocker</option>
      <option value="libero">Libero</option>
      <option value="defensive-specialist">Defensive Specialist</option>
    </select>
    <button
      @click="addPlayer(playerName, playerRole)"
      ref="addPlayerButton"
      class="addPlayerButton"
      :disabled="!playerName.trim() || players.length >= 6"
    >
      Add Player
    </button>

    <ol ref="playerList" class="player-list">
      <li
        v-for="player in players"
        :key="player.id"
        class="player"
      >
        <div class="player-wrapper">
          <span class="drag-icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e3e3e3"><path d="M359.79-192Q330-192 309-213.21t-21-51Q288-294 309.21-315t51-21Q390-336 411-314.79t21 51Q432-234 410.79-213t-51 21Zm240 0Q570-192 549-213.21t-21-51Q528-294 549.21-315t51-21Q630-336 651-314.79t21 51Q672-234 650.79-213t-51 21Zm-240-216Q330-408 309-429.21t-21-51Q288-510 309.21-531t51-21Q390-552 411-530.79t21 51Q432-450 410.79-429t-51 21Zm240 0Q570-408 549-429.21t-21-51Q528-510 549.21-531t51-21Q630-552 651-530.79t21 51Q672-450 650.79-429t-51 21Zm-240-216Q330-624 309-645.21t-21-51Q288-726 309.21-747t51-21Q390-768 411-746.79t21 51Q432-666 410.79-645t-51 21Zm240 0Q570-624 549-645.21t-21-51Q528-726 549.21-747t51-21Q630-768 651-746.79t21 51Q672-666 650.79-645t-51 21Z"/></svg>
          </span>
          <label for="playerName" class="sr-only">Name:</label>
          <input
            class="name"
            id="playerName"
            @blur="editPlayer(player.id, player.name, player.role)"
            v-model="player.name"
          />
          <label for="playerRole" class="sr-only">Role:</label>
          <select
            v-model="player.role"
            class="role"
            :class="player.role"
            @change="editPlayer(player.id, player.name, player.role)"
            id="playerRole"
          >
            <option value="setter" class="setter">Setter</option>
            <option value="outside-hitter" class="outside-hitter">Outside Hitter</option>
            <option value="opposite-hitter" class="opposite-hitter">Opposite Hitter</option>
            <option value="middle-blocker" class="middle-blocker">Middle Blocker</option>
            <option value="libero" class="libero">Libero</option>
            <option value="defensive-specialist" class="defensive-specialist">Defensive Specialist</option>
          </select>
          <button
            @click="removePlayer(player.id)"
            class="playerButton"
          >Remove</button>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
import { EventBus } from "@/shared/eventBus";
import { store } from "@/store";
import Sortable from "sortablejs";

export default {
  name: "StartingLineup",

  data() {
    return {
      players: [],
      modalType: "",
      modalData: {},
      selectedPlayer: null,
      playerName: "",
      playerRole: "",
      sortable: null
    };
  },

  methods: {
    addPlayer(player, role) {
      store.addPlayer(player, role);
      this.$nextTick(() => {
        this.playerName = "";
        this.playerRole = "";
      });
    },

    removePlayer(id) {
      const index = this.players.findIndex(p => p.id === id);
      store.removePlayer(index);
    },

    editPlayer(id, player, role) {
      const index = this.players.findIndex(p => p.id === id);
      store.editPlayer(index, player, role);
    }
  },

  mounted() {
    this.sortable = new Sortable(this.$refs.playerList, {
      handle: '.drag-icon',
      animation: 400,
      onEnd: (event) => {
        store.movePlayer(event.oldIndex, event.newIndex);
      }
    });

    EventBus.on('playerUpdate', (players) => {
      this.players = [];
      this.$nextTick(() => this.players = players);
    })
  }
};
</script>

<style scoped>
*:disabled {
  cursor: not-allowed;
}
span.num {
  position: absolute;
  left: 20px;
}
span.drag-icon {
  cursor:move;
  svg {
    fill: black;
  }
}
input.name {
  cursor: pointer;
  min-width: 50%;
  &:hover {
    background-color: #dedede;
  }
}
select, button {
  cursor: pointer;
}
li.player div.player-wrapper {
  padding: 10px;
  margin: 5px 0;
  background-color: #f0f0f0;
  border-radius: 5px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
select.role {
  font-size: smaller;
  border-radius: 5px;
  padding: 2px 3px;
  color: white;
}
.role.setter, select option[value="setter"] {
  background-color: #f78d8d;
}
.role.opposite-hitter, select option[value="opposite-hitter"] {
  background-color: #ffc4c4;
}
.role.outside-hitter, select option[value="outside-hitter"] {
  background-color: #c4ccff;
}
.role.middle-blocker, select option[value="middle-blocker"] {
  background-color: #ebc4ff;
}
.role.defensive-specialist, select option[value="defensive-specialist"] {
  background-color: #c4ffc8;
}
.role.libero, select option[value="libero"] {
  background-color: #98cc9c;
}
.sr-only {
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
}
</style>
