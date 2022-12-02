'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'Users', 
      [
        {
         phone: '+32489584828',
         createdAt: new Date(),
         updatedAt: new Date()
        },
        {
         phone: '+32470123456',
         createdAt: new Date(),
         updatedAt: new Date()
        },
        {
         phone: '+32479056402',
         createdAt: new Date(),
         updatedAt: new Date()
        },
        {
         phone: '+32464383216',
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
