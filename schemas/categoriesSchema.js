const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(20);

const createCategoriesSchema = joi.object({
  name: name.required(),
});

const updateCategoriesSchema = joi.object({
  name: name,
});

const getCategoriesSchema = joi.object({
  id: id.require(),
});

module.exports = {createCategoriesSchema, updateCategoriesSchema, getCategoriesSchema};
