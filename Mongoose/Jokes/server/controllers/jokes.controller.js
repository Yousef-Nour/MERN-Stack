const { response } = require("express");
const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
    .then((result) => res.json({jokes : result}))
    .catch((err) => res.json({message: "Error finding all jokes", error : err}));
};

module.exports.findAJoke = (req, res) => {
    Joke.findOne({_id : req.params.id})
    .then((result) => res.json({theJoke : result}))
    .catch((err) => res.json({message : "Error finding the joke", error : err}));
};

module.exports.createAJoke = (req, res) => {
    Joke.create(req.body)
    .then(result => res.json({newUser : result}))
    .catch(err => res.json({message : "Error creating new user", error : err}));
};

module.exports.updateAJoke = (req, res) => {
    Joke.findOneAndUpdate({_id : req.params.id}, req.body , {new : true})
    .then(result => res.json({updatedJoke : result}))
    .catch(err => res.json({message : "Error updating existing user", error : err}));
};

module.exports.deleteAJoke = (req, res) => {
    Joke.deleteOne({_id : req.params.id})
    .then(result => response.json({message : "Deleted succefully"}))
    .catch(err => res.json({message : "Error deleting the joke", error : err}));
};

module.exports.findRandom = (req, res) => {
    Joke.find()
    .then(result => {
        let max = result.length;
        let random = Math.random() * max;
        return res.json({joke : result[parseInt(random)]});
    })
    .catch(err => res.json({message : "Error finding a random joke", error : err}));
}