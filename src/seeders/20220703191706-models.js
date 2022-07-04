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
     return queryInterface.bulkInsert('models', [{
      model: '2.0 E MT',
      group_model_id:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      model: '2.0 G AT',
      group_model_id:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      model: '2.7 V AT',
      group_model_id:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      model: '1.0 E MT',
      group_model_id:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      model: '1.3 G AT',
      group_model_id:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      model: 'ALL NEW VELOS 1.5 AT',
      group_model_id:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      model: '2.2 MT',
      group_model_id:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      model: '3.0 AT',
      group_model_id:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      model: 'NEW 2.4 G MT',
      group_model_id:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      model: 'ALL NEW 2.4 AT',
      group_model_id:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      model: 'ALL NEW 2.0 AT',
      group_model_id:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      model: 'ALL NEW 1.5 AT TURBO',
      group_model_id:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      model: '1.5 E AT PRESTIGE',
      group_model_id:5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      model: '1.5 E AT',
      group_model_id:5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      model: '1.5 S MT',
      group_model_id:5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      model: 'ALL NEW 1.5 TURBO',
      group_model_id:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      model: 'ALL NEW 2.4 VTI IT',
      group_model_id:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      model: 'ALL NEW 2.4 VTI-L IT',
      group_model_id:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      model: '520i 2.0 AT',
      group_model_id:7,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      model: '520i 2.0 AT LUXURY',
      group_model_id:7,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      model: '530i G30',
      group_model_id:7,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('models', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
