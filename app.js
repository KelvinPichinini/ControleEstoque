const express = require ('express');
const bodyParser = require('body-parser');
const ProductRoutes = require('./routes/product.routes');
const CategoryRoutes = require('./routes/category.routes');
const EntryRoutes = require('./routes/entry.routes');
const { Entries } = require('./models');
const { Products } = require('./models');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.get('/entries/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Entries.findOne({
      where: { id: id },
      include: [{ model: Products, through: { attributes: [] } }],
    });

    if (!user)
      return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});
app.use(ProductRoutes);
app.use(CategoryRoutes);
app.use(EntryRoutes);


module.exports = app;