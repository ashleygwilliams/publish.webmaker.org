var Joi = require('joi');

module.exports = Joi.object().keys({
  title: Joi.string().required(),
  user_id: Joi.number().integer().required(),
  date_created: Joi.string().required(),
  date_updated: Joi.string().required(),
  description: Joi.string(),
  tags: Joi.string()
});
