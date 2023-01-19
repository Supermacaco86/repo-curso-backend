const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(20);

const createPurchaseOrdersSchema = joi.object({
  name: name.required(),
});

const updatePurchaseOrdersSchema = joi.object({
  name: name,
});

const getPurchaseOrdersSchema = joi.object({
  id: id.require(),
});

module.exports = {createPurchaseOrdersSchema, updatePurchaseOrdersSchema, getPurchaseOrdersSchema};
