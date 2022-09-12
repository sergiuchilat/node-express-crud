'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    static associate(models) {
      Location.belongsTo(models.Region)
    }
  }
  Location.init({
    name: DataTypes.STRING(50),
    region_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Location'
  });
  return Location;
};