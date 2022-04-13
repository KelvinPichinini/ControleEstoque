module.exports = (sequelize, DataTypes) => {
  const ProductInventories= sequelize.define('ProductsInventories',
    { amount: DataTypes.INTEGER },
    { timestamps: false },
  );

  ProductInventories.associate = (models) => {
    models.Inventories.belongsToMany(models.Products, {
      through: ProductInventories,
      foreignKey: 'inventoryId',
      otherKey: 'productId',
    });
    models.Products.belongsToMany(models.Inventories, {
      through: ProductInventories,
      foreignKey: 'productId',
      otherKey: 'inventoryId',
    });
  };

  return ProductInventories;
};