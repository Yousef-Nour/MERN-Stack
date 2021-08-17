const ProductController = require("../controllers/product.controller");

module.exports = app  => {
    app.get("/api/products", ProductController.findAll);
    app.get("/api/products/:id", ProductController.findProduct);
    app.post("/api/products/new", ProductController.createProduct);
    app.put("/api/product/:id/edit", ProductController.updatePerson);
    app.delete("/api/product/:id", ProductController.deleteProduct)
}