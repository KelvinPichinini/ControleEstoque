module.exports = (sequelize, DataTypes) => {
  const Entry = sequelize.define('Entries', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user:{ type: DataTypes.INTEGER },
  },
  {
    timestamps: true,
  });

  return Entry;
};