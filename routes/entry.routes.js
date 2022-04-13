const { Router }= require('express');
const { getAll, getById, create, update, remove } = require('../controllers/category.controller');

const router = Router();

router.get('/entries', getAll);
router.post('/entries', create);
router.get('/entries/:id', getById);
router.put('/entries/:id', update);
router.delete('/entries/:id', remove);

module.exports = router;