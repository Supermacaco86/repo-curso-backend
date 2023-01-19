const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(20);

const createUserSchema = joi.object({
  name: name.required(),
});

const updateUserSchema = joi.object({
  name: name,
});

const getUserSchema = joi.object({
  id: id.require(),
});

module.exports = {createUserSchema, updateUserSchema, getUserSchema};
