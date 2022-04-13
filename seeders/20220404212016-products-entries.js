'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProductsEntries',
      [
        { productId: 1, entryId:1, amount:10 },
        { productId: 2, entryId:1, amount:15 },
        { productId: 3, entryId:1, amount:5 },
        { productId: 4, entryId:1, amount:4 },

      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('ProductsEntries', null, {});
  },
};
