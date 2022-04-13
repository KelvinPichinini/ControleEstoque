const { Categories } = require('../models');

  const getAll = async () => {
    const result = await Categories.findAll();
    return result;
  };

  const getById = async (id) => {
    const item = await Categories.findByPk(id);
    if (!item) {
      return undefined
    }
    return item;
  };

  const create = async (item) => {
    const itemCreated = await Categories.findOrCreate({where : {name: item.name}, defaults: item});
    return itemCreated;
  };

  const update = async (item, id) => { 
    await Categories.update({name: item.name,contact: item.categoryId, info: item.info}, {where: {id:id}});
  };

  const remove = async (id) => {
    await Categories.destroy({where: {id:id}});
  };

module.exports = { getAll, getById, create, update, remove };