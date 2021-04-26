const logger = require('../config/logger');

module.exports = (server) => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
};
