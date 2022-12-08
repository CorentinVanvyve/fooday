'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    return await queryInterface.bulkInsert(
      'Aliments',
      [
        {
         name: 'yaourt grecque 10%',
         kcal: 121.0,
         protein: 3.5,
         saturated_lipid: 6.2,
         unsaturated_lipid: 3.8,
         carbohydrate: 4.3,
         sugar: 3.6,
         store_product_link: 'https://fic.colruytgroup.com/productinfo/fr/cogo/4220974',
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
        },
        {
          name: 'thon',
          kcal: 239.0,
          protein: 26,
          saturated_lipid: 2.0,
          unsaturated_lipid: 13.0,
          carbohydrate: 0,
          sugar: 1.5,
          store_product_link: 'https://fic.colruytgroup.com/productinfo/fr/cogo/3073024',
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
