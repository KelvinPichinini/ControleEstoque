'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProductsInventories',
      [
        { productId: 1, inventoryId:1, amount:1 },
        { productId: 2, inventoryId:1, amount:2 },
        { productId: 3, inventoryId:1, amount:3 },
        { productId: 4, inventoryId:1, amount:1 },

      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('ProductsInventories', null, {});
  },
};
