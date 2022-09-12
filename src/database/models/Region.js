'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Region extends Model {
    static associate(models) {
      Region.belongsTo(models.Country)
      Region.hasMany(models.Location)
    }
  }
  Region.init({
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    country_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Region',
  });
  return Region;
};