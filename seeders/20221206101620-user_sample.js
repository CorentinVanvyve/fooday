'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    return await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 1,
         phone: '+32489584828',
         createdAt: new Date(),
         updatedAt: new Date()
        },
        {
          id: 2,
         phone: '+32470123456',
         createdAt: new Date(),
         updatedAt: new Date()
        },
        {
          id: 3,
         phone: '+32479056402',
         createdAt: new Date(),
         updatedAt: new Date()
        },
        {
          id: 4,
         phone: '+32464383216',
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
