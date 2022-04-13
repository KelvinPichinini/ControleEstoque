'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories',
      [
        { name: 'AAP', contact: 'Ecletica', info:'Pedido na terça para entrega na quinta seguinte'},
        { name: 'RudgePlast', contact: 'Whatsapp', info:'Pedido na quarta para retirada na quinta'},
        { name: 'ASSAI', contact: 'Whatsapp', info:'Pedido qualquer dia na semana, retirada mesmo dia'}, 
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
