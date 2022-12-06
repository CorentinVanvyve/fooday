'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    return await queryInterface.bulkInsert(
      'Profiles',
      [
        {
         first_name: 'Corentin',
         last_name: 'Vanvyve',
         user_id: 25,
         createdAt: new Date(),
         updatedAt: new Date()
        },
        {
          first_name: 'Alice',
          last_name: 'Dupont',
          user_id: 26,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: 'Jean',
          last_name: 'Alfonso',
          user_id: 27,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: 'Deborah',
          last_name: 'Dugast',
          user_id: 28,
          createdAt: new Date(),
          updatedAt: new Date()
         }
      ],
      {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
