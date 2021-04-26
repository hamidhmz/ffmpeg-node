const app = require('./app');
const logger = require('./config/logger');
const config = require('./config/config');
const unexpectedErrorHandler = require('./utils/unexpectedErrorHandler');
const sigtermHandler = require('./utils/sigtermHandler');

const server = app.listen(config.port, () => {
  logger.info(`Listening to port ${config.port}`);
});

process.on('uncaughtException', (error) => unexpectedErrorHandler(error, server));
process.on('unhandledRejection', (error) => unexpectedErrorHandler(error, server));
process.on('SIGTERM', () => sigtermHandler(server));
