<template>
    <div class="rotation-wrapper">
      PLAYERS
      <button @click="addPlayer">Add Player</button>
      <ul>
        <li 
            v-for="(player, index) in players" 
            :key="index" class="player"
            @click="removePlayer(index)">
          {{ player.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Rotations',
    data() {
        return {
            players: []
        }
    },
    methods: {
      addPlayer() {
        if(this.players.length === 6) return
        const playerName = prompt('Enter player name:')
        this.players.push({ name: playerName });
        this.$emit('updatePlayers', this.players);
      },
      removePlayer(index) {
        this.players.splice(index, 1);
        this.$emit('updatePlayers', this.players);
      }
    },
  }
  </script>
  
  <style scoped>
  li.player {
    list-style: none;
    padding: 10px;
    margin: 5px 0;
    background-color: #f0f0f0;
    border-radius: 5px;
    width: 50%
  }
  li.player:hover{
    background-color: lightcoral;
    cursor: pointer;
  }
  </style>
  