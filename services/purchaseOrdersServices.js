const faker = require('faker');

class PurchaseOrdersServices{
  constructor(){
    this.purchaseOrders = [];
    this.generate();
  };
  generate(){
    const limit = 100;
    for(let index = 0; index < limit; index ++){
      this.purchaseOrders.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
      })
    }
  };
  async create(data){
    const newPurchaseOrder = {
      id: faker.datatype.uuid(),
      ...data
    };
    this.purchaseOrders.push(newPurchaseOrder);
    return newPurchaseOrder;
  };
  async find(){
    return this.purchaseOrders;
  };
  async findOne(id){
    return this.purchaseOrders.find(item => item.id === id);
  };
  async update(id, changes){
    const index = this.purchaseOrders.findIndex(item => item.id === id);
    if(index ===-1){
      throw new Error('Product not foun.')
    }else{
      const purchaseOrder = this.purchaseOrders[index]
      this.purchaseOrders[index] = {
        ...purchaseOrder,
        ...changes,
      };
      return this.purchaseOrders[index];
    }
  };
  async delete(id){
    const index = this.purchaseOrders.findIndex(item => item.id === id);
    if(index ===-1){
      throw new Error('Product not foun.')
    }else{
      this.purchaseOrders.splice(index, 1);
      return {id};
    };
  };
};
module.exports = PurchaseOrdersServices;
