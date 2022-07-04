'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class group_models extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  group_models.init({
    grup_model: DataTypes.STRING,
    brand_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'group_models',
  });
  return group_models;
};