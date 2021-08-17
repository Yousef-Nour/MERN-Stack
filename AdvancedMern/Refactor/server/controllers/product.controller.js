const { response } = require("express");
const Product = require("../models/product.model");

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
    .then(result => res.json(result))
    .catch(err => console.log(err));
}

module.exports.findProduct = (req, res) => {
    Product.findOne({_id : req.params.id})
    .then(result => res.json(result))
    .catch(err => res.json({message : "Error finding the product", error : err}))
}

module.exports.findAll = (req, res) => {
    Product.find()
    .then(result => res.json(result))
    .catch(err => res.json({message : "Error retrieving producs", error : err}));
}

module.exports.updatePerson = (req, res) => {
    Product.findOneAndUpdate({_id : req.params.id}, req.body, {new:true})
    .then(result => res.json(result))
    .catch(err => console.log("error updating this product"));
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id : req.params.id})
    .then(result => res.json(result))
    .catch(err => res.json(err));
}
