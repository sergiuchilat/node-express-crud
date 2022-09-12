const sequelize = require('sequelize');

module.exports = (connection) => {
    connection.define('countries', {
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
    })
}