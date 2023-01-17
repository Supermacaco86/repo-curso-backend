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
  create(){

  };
  find(){
    return this.purchaseOrders;
  };
  findOne(id){
    return this.purchaseOrders.find(item => item.id === id);
  };
  update(){};
  delete(){};
};
module.exports = PurchaseOrdersServices;
