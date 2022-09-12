module.exports = (connection) => {
    const models = require('../models/index')

    for (const model of models) {
        model(connection);
    }
}