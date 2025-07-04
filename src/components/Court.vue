<template>
  <div>
    <ul class="rotation">
      <li v-for="(player, index) in players" :key="index" :class="player.role==='player' ? '': player.role" class="player">
        <div class="name">{{ player.name }}</div>
        <span :class="player.role==='player' ? '': player.role" class="role">{{ player.role==='player' ? '': player.role }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Rotations",

  props: {
    players: {
      type: Array,
      required: true,
      defualt: [],
    },
  },
};
</script>

<style scoped>
div.court {
  border: 1px solid black;
}
.rotation {
  list-style: none;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "i f c"
    "h e b"
    "g d a";
  display: grid;
  padding: 0;
  grid-gap: 30px 10px;
}
.two-player {
  li.player:nth-child(1) {
    grid-area: b;
  }
  li.player:nth-child(2) {
    grid-area: h;
  }
}
.three-player {
  li.player:nth-child(1) {
    grid-area: b;
  }
  li.player:nth-child(2) {
    grid-area: e;
  }
  li.player:nth-child(3) {
    grid-area: h;
  }
}
.four-player {
  li.player:nth-child(1) {
    grid-area: b;
  }
  li.player:nth-child(2) {
    grid-area: f;
  }
  li.player:nth-child(3) {
    grid-area: h;
  }
  li.player:nth-child(4) {
    grid-area: d;
  }
}
.five-player {
  li.player:nth-child(1) {
    grid-area: a;
  }
  li.player:nth-child(2) {
    grid-area: c;
  }
  li.player:nth-child(3) {
    grid-area: f;
  }
  li.player:nth-child(4) {
    grid-area: g;
  }
  li.player:nth-child(5) {
    grid-area: d;
  }
}
.six-player {
  li.player:nth-child(1) {
    grid-area: a;
  }
  li.player:nth-child(2) {
    grid-area: c;
  }
  li.player:nth-child(3) {
    grid-area: f;
  }
  li.player:nth-child(4) {
    grid-area: i;
  }
  li.player:nth-child(5) {
    grid-area: g;
  }
  li.player:nth-child(6) {
    grid-area: d;
  }
}
li.player {
  text-align: center;
  padding: 5px;
  min-height: 40px;
  align-content: center;
  border: 1px solid #ccc;
  border-radius: 5px;
}
div.name {
  font-size: larger;
  margin-bottom: 5px;
}
span.role {
  font-size: smaller;
  border-radius: 5px;
  padding: 2px 3px;
  color: white;
}
.role.setter {
  background-color: #f78d8d;
}
.role.opposite-hitter {
  background-color: #ffc4c4;
}
.role.outside-hitter {
  background-color: #c4ccff;
}
.role.middle-blocker {
  background-color: #ebc4ff;
}
.role.defensive-specialist {
  background-color: #c4ffc8;
}
.role.libero {
  background-color: #98cc9c;
}
</style>
