require('dotenv').config();
const server = require('./app.js');

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`\Running on port ${port}`));