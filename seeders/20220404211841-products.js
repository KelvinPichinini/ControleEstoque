'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products',
      [
        { name: 'Massa Branca M', categoryId: 1},
        { name: 'Massa Branca P', categoryId: 1},
        { name: 'Creme Trufado', categoryId: 1},
        { name: 'Creme Mesclado', categoryId: 1},
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  },
};