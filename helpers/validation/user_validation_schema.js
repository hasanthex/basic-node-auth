const Joi = require("@hapi/joi");

const authSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(6).required(),
    first_name: Joi.string().min(3),
    last_name: Joi.string().allow(''),
});

module.exports = { authSchema };