const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const dogRoutes = require('./controllers/posts')
server.use('/posts', postRoutes)

// Root route
server.get('/', (req, res) => res.send('Hello, client!'))

module.exports = server