import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import pino from 'pino';

const PORT = process.env.PORT || 5000;

const logger = pino({ level: process.env.LOG_LEVEL || 'info' });

const server = app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});

process.on("SIGINT", () => {
    logger.info("Shutting down...");
    server.close(() => process.exit(0));
});