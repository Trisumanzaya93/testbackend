'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class models extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  models.init({
    model: DataTypes.STRING,
    group_model_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'models',
  });
  return models;
};