const db = {
    init: async () => {
        const connection = require('./connect')

        try {
            await connection.authenticate();
            console.error('\x1b[32m', 'Connection to database: OK');
            // const migrate = require('./migrate')
            // migrate(connection);
            // console.error('\x1b[32m', 'Migrate database: OK');
            // await connection.sync();
            // console.error('\x1b[32m', 'Sync database: OK');
        } catch (error) {
            console.error('\x1b[31m', 'Unable to connect to the database:', error);
        }
    }
};

module.exports = db