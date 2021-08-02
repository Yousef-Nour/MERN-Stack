const Product = require('../models/product.model');
 
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json({ products: allProducts }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => res.json({ products: newlyCreatedProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}