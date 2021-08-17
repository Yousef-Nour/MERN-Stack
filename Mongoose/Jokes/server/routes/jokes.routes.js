const JokeController = require("../controllers/jokes.controller");

module.exports = app  => {
    app.get("/api/jokes", JokeController.findAllJokes);
    app.get("/api/jokes/random", JokeController.findRandom);
    app.get("/api/jokes/:id", JokeController.findAJoke);
    app.post("/api/jokes/new", JokeController.createAJoke);
    app.put("/api/jokes/update/:id", JokeController.updateAJoke);
    app.delete("/api/jokes/delete/:id", JokeController.deleteAJoke);
}