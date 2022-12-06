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
         user_id: 25,
         createdAt: new Date(),
         updatedAt: new Date()
        },
        {
        weight: 60,
        height: 170,
        birthday: new Date(1990, 11, 17),
        gender: 'F',
        user_id: 26,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
          weight: 90,
          height: 190,
          birthday: new Date(1991, 11, 17),
          gender: 'M',
          user_id: 27,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          weight: 50,
          height: 160,
          birthday: new Date(2000, 11, 17),
          gender: 'F',
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
