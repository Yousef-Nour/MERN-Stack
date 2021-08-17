const mongoose = require('mongoose');

const playersSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : [2, "Player name must be 2 characters at least"]
    },
    position : String,
}, {timestamps:true});

module.exports.players = mongoose.model("players", playersSchema);