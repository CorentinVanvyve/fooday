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
         birthday: "1998-11-26T11:26:39.195Z",
         user_id: 3,
         createdAt: new Date(),
         updatedAt: new Date()
        },
        {
          first_name: 'Alice',
          last_name: 'Dupont',
          birthday: "1989-10-09T11:26:39.195Z",
          user_id: 6,
          createdAt: new Date(),
          updatedAt: new Date()
         }
      ], {});
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
