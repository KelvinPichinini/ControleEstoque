const { Router }= require('express');
const { getAll, getById, create, update, remove } = require('../controllers/category.controller');

const router = Router();

router.get('/categories', getAll);
router.post('/categories', create);
router.get('/categories/:id', getById);
router.put('/categories/:id', update);
router.delete('/categories/:id', remove);

module.exports = router;