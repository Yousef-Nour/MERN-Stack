const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/authors",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(() => console.log("Established connection to the database"))
.catch(err => console.log("Error connecting to database", err));