const faker = require('faker');
const boom = require('@hapi/boom');

class CategoriesServices {
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
        isBlock: faker.datatype.boolean(),
      })
    }
  };

  async create(data){
    const newCategory = {
      id: faker.datatype.uuid(),
      ...data
    };
    this.categories.push(newCategory);
    return newCategory;
  };

  async find(){
    return this.categories;
  };

  async findOne(id){
    const category = this.categories.find(item => item.id === id);
    if(!category){
      throw boom.notFound('Category not foun.');
    }else if(category.isBlock){
      throw boom.conflict('Category is block.');
    }else{
      return category;
    };
  };

  async update(id, changes){
    const index = this.categories.findIndex(item => item.id === id);
    if(index ===-1){
      throw new Error('Category not found.')
    }else{
      const category = this.categories[index]
      this.categories[index] = {
        ...category,
        ...changes,
      };
      return this.categories[index];
    }
  };
  
  async delete(id){
    const index = this.categories.findIndex(item => item.id === id);
    if(index ===-1){
      throw new Error('Category not found.')
    }else{
      this.categories.splice(index, 1);
      return {id};
    }
  };
};

module.exports = CategoriesServices;
