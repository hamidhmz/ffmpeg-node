const Joi = require('joi');

const videoTrim = {
  body: Joi.object().keys({
    startTime: Joi.number().integer().min(0).required(), // it must be in milliseconds
    length: Joi.number().integer().min(100).max(300000).required(), // it must be in milliseconds
    videoUrl: Joi.string().required(),
  }),
};

module.exports = {
  videoTrim,
};
