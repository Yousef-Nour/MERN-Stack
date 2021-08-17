const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	title: {
		type : String,
		minlength : [3, "the title should be 3 characters at least"]

	},
	price : {
		type : Number,
		minlength : [1, "product price must be 1 digit at least"]
	},
    description : {
        type : String,
        minlength : [10, "description should be 10 characters at least"]
    }
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;