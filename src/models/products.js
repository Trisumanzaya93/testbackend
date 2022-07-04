'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      products.belongsTo(models.merk, {
        sourceKey: 'id',
        foreignKey: 'brand_id',
        as: 'merk'
      })
      products.belongsTo(models.models,{
        sourceKey: 'id',
        foreignKey: 'model_id',
        as: 'models'
      })
      products.belongsTo(models.group_models,{
        sourceKey: 'id',
        foreignKey: 'group_model_id',
        as: 'group_models'
      })
      // define association here
    }
  }
  products.init({
    model_id: DataTypes.INTEGER,
    group_model_id: DataTypes.INTEGER,
    brand_id: DataTypes.INTEGER,
    tahun: DataTypes.STRING,
    status: DataTypes.STRING,
    plat_nomor: DataTypes.STRING,
    image: DataTypes.STRING,
    nama_penjual: DataTypes.STRING,
    alamat: DataTypes.STRING,
    telp: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};