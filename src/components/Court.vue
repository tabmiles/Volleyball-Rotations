<template>
    <div class="court">
      COURT
      <ul class="rotation">
        <li 
            v-for="(player, index) in players" 
            :key="index" class="player">
            {{ player.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Rotations',
    props: {
      players: {
        type: Array,
        required: true,
        defualt: []
      },
    }
  }
  </script>
  
  <style scoped>
  div.court {
    border: 1px solid black;
  }
  .rotation {
    list-style: none;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "d c b"
      "e f a";
    display: grid;
  }
  li.player:nth-child(1) {
    grid-area: a;
  }
  li.player:nth-child(2) {
    grid-area: b;
  }
  li.player:nth-child(3) {
    grid-area: c;
  }
  li.player:nth-child(4) {
    grid-area: d;
  }
  li.player:nth-child(5) {
    grid-area: e;
  }
  li.player:nth-child(6) {
    grid-area: f;
  }
  </style>
  