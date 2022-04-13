'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Inventories',
      [
        { user: 'Kelvin' },
        { user: 'Luciane' },

      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Inventories', null, {});
  },
};
