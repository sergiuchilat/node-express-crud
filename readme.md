# Project description

This is an example of Rest API written on Express

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
    |-- controllers (REST controllers)
    |-- database (database: config, migrations)
    |-- models (application models)
    |-- routes (application routes)
    |app.js (application entry point)
|-- .env (environment variables)
|-- .gitignore
|-- package.json
```