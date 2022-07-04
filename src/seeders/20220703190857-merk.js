'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      return queryInterface.bulkInsert('merks', [{
        brand: 'Toyota',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        brand: 'Honda',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        brand: 'Bmw',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('merk', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
