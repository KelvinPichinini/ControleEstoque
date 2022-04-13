const { Router }= require('express');
const { getAll, getById, create, update, remove } = require('../controllers/product.controller');

const router = Router();

router.get('/products', getAll);
router.post('/products', create);
router.get('/products/:id', getById);
router.put('/products/:id', update);
router.delete('/products/:id', remove);

module.exports = router;