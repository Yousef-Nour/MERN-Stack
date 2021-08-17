const AuthorController = require('../controllers/author.controller');

module.exports = app => {
    app.get("/api/authors", AuthorController.findAuthors);
    app.delete("/api/:id", AuthorController.deleteAuthor);
    app.get("/api/:id", AuthorController.findAuthor);
    app.put("/api/:id", AuthorController.updateAuthor);
    app.post("/api/new", AuthorController.createAuthor);
}