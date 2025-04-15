export const store = {
    players: null,
    roles: ['setter'],
    setPlayers(players) {
        this.players = players
    },
    getPlayers() {
        return this.players
    }
}