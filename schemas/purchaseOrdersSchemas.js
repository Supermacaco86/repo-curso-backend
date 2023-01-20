const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(20);

const createPurchaseOrdersSchema = Joi.object({
  name: name.required(),
});

const updatePurchaseOrdersSchema = Joi.object({
  name: name,
});

const getPurchaseOrdersSchema = Joi.object({
  id: id.required(),
});

module.exports = {createPurchaseOrdersSchema, updatePurchaseOrdersSchema, getPurchaseOrdersSchema};
