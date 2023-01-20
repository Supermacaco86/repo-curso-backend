const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(20);

const createCategoriesSchema = Joi.object({
  name: name.required(),
});

const updateCategoriesSchema = Joi.object({
  name: name,
});

const getCategoriesSchema = Joi.object({
  id: id.required(),
});

module.exports = {createCategoriesSchema, updateCategoriesSchema, getCategoriesSchema};
