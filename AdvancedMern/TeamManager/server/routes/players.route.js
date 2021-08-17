const PlayerController = require("../controllers/players.controller");

module.exports = app => {
    app.post("/api/player/new", PlayerController.createPlayer);
    app.get("/api/players", PlayerController.getPlayers);
    app.delete("/api/:id/delete", PlayerController.deletePlayer);
}