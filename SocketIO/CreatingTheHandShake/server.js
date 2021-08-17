const express = require('express');
const app = express();

const server = app.listen(8000, () => {
    console.log("Listening at port 8000");
});

const io = require('socket.io')(server, {cors:true});

io.on("connection", socket => {
    console.log("Nice to meet you. (Shake hand)");
    socket.emit('Welcome',"Hello Bara Salameh");
    // Socket.on("event_from_client", data => {
        
    //     Socket.emit("Hello Bara Salameh", data);
    // });
});

