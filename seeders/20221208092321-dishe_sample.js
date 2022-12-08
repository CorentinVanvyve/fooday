'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'Dishes',
      [
        {
        id:1,
         name: 'Pâtes au thon',
         kcal: 0,
         protein: 0,
         saturated_lipid: 0,
         unsaturated_lipid: 0,
         carbohydrate: 0,
         sugar: 0,
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
        },
        {
          id: 2,
          name: 'Chili con carne',
          kcal: 0,
          protein: 0,
          saturated_lipid: 0,
          unsaturated_lipid: 0,
          carbohydrate: 0,
          sugar: 0,
          user_id: 1,
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
