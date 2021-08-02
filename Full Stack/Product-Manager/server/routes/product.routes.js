const productController = require('../controllers/product.controller')
module.exports = function (app) {
    app.get('/api/products', productController.findAllProducts);
    app.post('/api/products/new', productController.createNewProduct);  //new because you cant use the same route twice

}