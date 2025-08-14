import { EventBus } from "./shared/eventBus";

export const store = {
    players: [],
    addPlayer(player, role) {
        this.players.push({ name: player, role: role || "player", id: 'player-'+this.players.length });
        EventBus.emit('playerUpdate', this.players);
    },
    removePlayer(index) {
        this.players.splice(index, 1);
        EventBus.emit('playerUpdate', this.players);
    },
    editPlayer(index, player, role) {
      this.players[index].name = player;
      this.players[index].role = role || "player";
      EventBus.emit('playerUpdate', this.players);
    },
    getPlayers() {
        return this.players
    },
    movePlayer(oldIndex, newIndex) {
        const movedPlayer = this.players.splice(oldIndex, 1)[0];
        this.players.splice(newIndex, 0, movedPlayer);
        EventBus.emit('playerUpdate', this.players);
    }
}