# Project description

This is an example of a Rest API written in Express

In this project are used:
- Node
- Express
- Sequelize
- MySQL



# Install project
Install dependencies
```
npm install
```

# Configure .env file

Backend API base URL
> SERVER_URL=localhost

Backend API port
> SERVER_PORT=3000

Database host
> DB_HOST=localhost

Database user
> DB_USER="express_test"

Database password
> DB_PASSWORD="password"

Database name
> DB_NAME="express_test"


Database dialect
> DB_DIALECT=mysql


# Migrating database(Sequelize) 

Sequelize documentation: https://sequelize.org/
## Launch new migrations
```
npm run migrate
```
or
```
cd src/database
npx sequelize db:migrate
```

# Rollback last migration
```
npm run migrate:undo
```
or
```
cd src/database
npx sequelize db:migrate:undo
```

# Rollback all migrations
```
cd src/database
npx sequelize db:migrate:undo
```

# Full documentation about migration
> https://github.com/sequelize/cli#installation

# Run project
```
npm run dev
```


# Project structure

```
|-- src
    |-- api
        |-- controllers (REST controllers)
        |-- routes (application routes)
        |-- services (services layer)
    |-- database (database: config, migrations)
        |-- config (database config)
        |-- models (application models)
        |-- migrations (database migrations)
        |-- seeders (database seeders)
        |-- repositories (repositories layer)
        |-- index.js (database init)
    |app.js (application entry point)
|-- .env (environment variables)
|-- .gitignore
|-- package.json
```

## Postman collection link
https://www.getpostman.com/collections/b2a29713bceae454a41e