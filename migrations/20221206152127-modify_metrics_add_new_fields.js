'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Metrics', // table name
        'birthday', // new field name
        {
          type: Sequelize.DATE,
          allowNull: false,
        }
      ),
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Profiles', 'birthday')
    ]);
  }
};
