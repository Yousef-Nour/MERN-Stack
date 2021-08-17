const {Author} = require('../models/author.model');

module.exports.findAuthors = (req, res) => {
    Author.find()
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
}

module.exports.deleteAuthor = (req, res) => {
    Author.findOneAndDelete({_id : req.params.id})
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
}

module.exports.findAuthor = (req, res) => {
    Author.findOne({_id : req.params.id})
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id : req.params.id}, req.body , {new:true, runValidators:true})
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
}

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
}
