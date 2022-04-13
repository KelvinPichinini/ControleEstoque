const { Products } = require('../models');

  const getAll = async () => {
    const products = await Products.findAll();
    return products;
  };

  const getById = async (id) => {
    const item = await Products.findByPk(id);
    if (!item) {
      return undefined
    }
    return item;
  };

  const create = async (item) => {
    const itemCreated = await Products.findOrCreate({where : {name: item.name}, defaults: item});
    return itemCreated;
  };

  const update = async (item, id) => { 
    await Products.update({name: item.name,categoryId: item.categoryId}, {where: {id:id}});
  };

  const remove = async (id) => {
    await Products.destroy({where: {id:id}});
  };

module.exports = { getAll, getById, create, update, remove };