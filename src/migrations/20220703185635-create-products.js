'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      model_id: {
        type: Sequelize.INTEGER
      },
      group_model_id: {
        type: Sequelize.INTEGER
      },
      brand_id: {
        type: Sequelize.INTEGER
      },
      tahun: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      plat_nomor: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      nama_penjual: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      telp: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};