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
         user_id: 2,
         createdAt: new Date(),
         updatedAt: new Date()
        },
        {
          first_name: 'Alice',
          last_name: 'Dupont',
          user_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: 'Jean',
          last_name: 'Alfonso',
          user_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: 'Deborah',
          last_name: 'Dugast',
          user_id: 5,
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
