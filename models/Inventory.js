module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define('Inventories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user:{ type: DataTypes.INTEGER },
  },
  {
    timestamps: true,
  });

  return Inventory;
};