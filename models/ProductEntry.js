module.exports = (sequelize, DataTypes) => {
  const ProductEntries = sequelize.define('ProductsEntries',
    { amount: DataTypes.INTEGER },
    { timestamps: false },
  );

  ProductEntries.associate = (models) => {
    models.Entries.belongsToMany(models.Products, {
      through: ProductEntries,
      foreignKey: 'entryId',
      otherKey: 'productId',
    });
    models.Products.belongsToMany(models.Entries, {
      through: ProductEntries,
      foreignKey: 'productId',
      otherKey: 'entryId',
    });
  };

  return ProductEntries;
};