const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/team", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(res => console.log("Established a connection to the database"))
.catch(err => console.log("Error connecting to the database",err));
