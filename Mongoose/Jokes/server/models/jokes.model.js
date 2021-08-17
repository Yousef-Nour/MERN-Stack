const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: {
		type : String,
		minlength : [10, "the joke should be 10 characters at least"]

	},
	punchline : {
		type : String,
		minlength : [3, "Joke answer must be 3 characters at least"]
	}
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;