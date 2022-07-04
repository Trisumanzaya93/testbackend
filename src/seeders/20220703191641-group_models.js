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
     return queryInterface.bulkInsert('group_models', [{
      grup_model:"Kijang Inova",
      brand_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      grup_model:"Avanza",
      brand_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      grup_model:"Camry",
      brand_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      grup_model:"CR-V",
      brand_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      grup_model:"BR-V",
      brand_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      grup_model:"Accord",
      brand_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      grup_model:"5 Series",
      brand_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('group_models', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
