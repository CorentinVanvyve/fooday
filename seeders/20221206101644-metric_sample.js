'use strict';

const metric = require('../models/metric');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'Metrics',
      [
        {
         weight: 70,
         height: 180,
         birthday: new Date(1998, 11, 17),
         gender: 'M',
         user_id: 2,
         createdAt: new Date(),
         updatedAt: new Date()
        },
        {
        weight: 60,
        height: 170,
        birthday: new Date(1990, 11, 17),
        gender: 'F',
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
          weight: 90,
          height: 190,
          birthday: new Date(1991, 11, 17),
          gender: 'M',
          user_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          weight: 50,
          height: 160,
          birthday: new Date(2000, 11, 17),
          gender: 'F',
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
