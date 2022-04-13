const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define('Products', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    categoryId: { type: DataTypes.INTEGER }
  },
  {
    timestamps: false,
    tableName: 'Products'
  });
  Product.associate = (models) => {
    Product.belongsTo(models.Categories,
      { foreignKey: 'id', as: 'category' });
  };

  return Product;
};

module.exports = Product;