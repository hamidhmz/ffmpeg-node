const toobusy = require('toobusy-js');
const logger = require('../config/logger');

module.exports = async (req, res, next) => {
  if (process.env.NODE_ENV !== 'test' && toobusy()) {
    logger.error('event loop is busy!!!!');
  }
  next();
};
