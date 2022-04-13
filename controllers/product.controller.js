const { StatusCodes } = require('http-status-codes');
const ProductService = require('../services/product.service');

  const getAll = async (_req, res) => {
    const products = await ProductService.getAll();
    return res.status(StatusCodes.OK).json(products);
  };

  const getById = async (req, res) => {
    const id = parseInt(req.params.id, 10); 
    const item = await ProductService.getById(id);
    if (!item) {
      return res.status(StatusCodes.NOT_FOUND)
        .json({ message: 'Product not found!' });
    }

    return res.status(StatusCodes.OK).json(item);
  };

  const create = async (req, res) => {
    const item = req.body; 
    const itemCreated = await ProductService.create(item);
    if(!itemCreated[1]) {
      return res.status(StatusCodes.CONFLICT)
      .json({message: `${item.name} already exists. productId: ${itemCreated[0].id} `, productId: itemCreated[0].id});
    }
    return res.status(StatusCodes.CREATED).json(itemCreated[0]);
  };

  const update = async (req, res) => {
    const item = req.body; 
    const id = parseInt(req.params.id, 10);
    await ProductService.update(item, id);
    return res.status(StatusCodes.NO_CONTENT).end();
  };

  const remove = async (req, res) => {
    const id = Number(req.params.id);
    await ProductService.remove(id);
    res.status(StatusCodes.OK).json({ message: 'Product deleted successfully' });
  };

module.exports = { getAll, getById, create, update, remove };