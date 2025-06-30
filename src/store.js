export const store = {
    players: null,
    setPlayers(players) {
        this.players = players
    },
    getPlayers() {
        return this.players
    }
}