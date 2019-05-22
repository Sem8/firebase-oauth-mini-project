const express = require('express');
const cors = require('cors');

const server = express();
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.send(`Navigate to /api/auth to register to sign up and log in`)
});

module.exports = server;