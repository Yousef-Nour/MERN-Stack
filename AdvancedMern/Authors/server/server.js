const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json(), express.urlencoded({extended:true}));

require('./routes/author.route')(app);
require('./config/mongoose.config');

app.listen(8000, () => {
    console.log("Established connection at port 8000");
})