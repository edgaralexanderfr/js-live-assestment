'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('EmployeeTypes', [
      {
        name: 'Manager',
        salary: 20000
      },
      {
        name: 'Accountant',
        salary: 1500
      },
      {
        name: 'Clerk',
        salary: 1000
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('EmployeeTypes', null, {});
  }
};
