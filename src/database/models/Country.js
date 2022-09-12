'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Country extends Model {
        static associate(models) {
            Country.hasMany(models.Region)
        }
    }
    Country.init({
        id: {
            type: sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: sequelize.DataTypes.STRING(50),
            unique: true
        },
        code: {
            type: sequelize.DataTypes.STRING(2),
            unique: true
        }
    }, {
        sequelize,
        modelName: 'Country',
    });
    return Country;
};