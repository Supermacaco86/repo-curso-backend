const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(20);
const price = Joi.integer().min(10);

const createProductSchema = joi.object({
  name: name.required(),
  price: price.require(),
});

const updateProductSchema = joi.object({
  name: name,
  price: price,
});

const getProductSchema = joi.object({
  id: id.require(),
});

module.exports = {createProductSchema, updateProductSchema, getProductSchema};
