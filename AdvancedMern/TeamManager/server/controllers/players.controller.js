const {players} = require("../models/players.model");

module.exports.createPlayer = (req, res) => {
    players.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
}

module.exports.getPlayers = (req, res) => {
    players.find()
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
}

module.exports.deletePlayer = (req, res) => {
    players.deleteOne({_id : req.params.id})
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
}