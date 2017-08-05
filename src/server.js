const path = require('path');
const Server = require('http').Server;// import { Server } from 'http';
const Express = require('express');// import Express from 'express';

const app = new Express();
const server = new Server(app);

app.use(Express.static(path.join(__dirname, 'build')));

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';

server.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }

    return console.info(`Server running on http://localhost:${port} [${env}]`);
});