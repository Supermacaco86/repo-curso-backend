const faker = require('faker');

class CategoriesServices{
  constructor(){
    this.categories = [];
    this.generate();
  };
  generate(){
    const limit = 100;
    for(let index = 0; index < limit; index ++){
      this.categories.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        image: faker.image.imageUrl(),
      })
    }
  };
  create(){

  };
  find(){
    return this.categories;
  };
  findOne(id){
    return this.categories.find(item => item.id === id);
  };
  update(){};
  delete(){};
};
module.exports = CategoriesServices;
