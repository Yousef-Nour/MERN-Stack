const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json(), express.urlencoded({extended:true}));

require('./routes/players.route')(app);
require('./config/mongoose.config');


app.listen(8000, () => {
    console.log("Listening to port 8000");
});