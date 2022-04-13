module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Categories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    contact: DataTypes.STRING,
    info: DataTypes.STRING,
  },
  {
    timestamps: false,
  });
  Category.associate = (models) => {
    Category.hasMany(models.Products,
      { foreignKey: 'id', as: 'category' });
  };

  return Category;
};