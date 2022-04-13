const { StatusCodes } = require('http-status-codes');
const Service = require('../services/entry.service');

  const getAll = async (_req, res) => {
    const result = await Service.getAll();
    return res.status(StatusCodes.OK).json(result);
  };

  const getById = async (req, res) => {
    const id = parseInt(req.params.id, 10); 
    const item = await Service.getById(id);
    if (!item) {
      return res.status(StatusCodes.NOT_FOUND)
        .json({ message: 'Product not found!' });
    }

    return res.status(StatusCodes.OK).json(item);
  };

  const getLatest = async (req, res) => {
    const item = await Service.getLatest();
    return res.status(StatusCodes.OK).json(item);
  };

  const create = async (req, res) => {
    const item = req.body; 
    const itemCreated = await Service.create(item);
    if(!itemCreated[1]) {
      return res.status(StatusCodes.CONFLICT)
      .json({message: `${item.name} already exists. categoryId: ${itemCreated[0].id} `, categoryId: itemCreated[0].id});
    }
    return res.status(StatusCodes.CREATED).json(itemCreated[0]);
  };

  const update = async (req, res) => {
    const item = req.body; 
    const id = parseInt(req.params.id, 10);
    await Service.update(item, id);
    return res.status(StatusCodes.NO_CONTENT).end();
  };

  const remove = async (req, res) => {
    const id = Number(req.params.id);
    await Service.remove(id);
    res.status(StatusCodes.OK).json({ message: 'Category deleted successfully' });
  };

module.exports = { getAll, getById, create, update, remove };