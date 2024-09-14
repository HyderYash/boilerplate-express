const express = require('express');
const connectDB = require('./config/db');
const { port } = require('./config');
const routes = require('./routes');
const logger = require('./config/logger');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', routes);

// Start server
app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
});
