// import express from 'express';
const express = require('express'); // to import express
const cors = require('cors');

const app = express();
require("./server/config/mongoose.config");
app.use(cors())
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true }));;
require("./server/routes/product.routes")(app)
app.listen(8000, ()=>{
    console.log("Listining to Port 8000")
    
})