const sequelize = require('sequelize');

module.exports = (connection) => {
    const region = connection.define('regions', {
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
        },
        country_id: {
            type: sequelize.DataTypes.INTEGER
        }
    })

    region.belongsTo(connection.models.countries, {
        foreignKey: "country_id",
        targetKey: "id",
        uniqueKey: "region_country_fk"
    })
}