require('dotenv').config();

const localPg = {
  host: 'localhost',
  database: 'fboauth',
  user: 'postgres',
  password: process.env.DATABASE_PASSWORD,
};

const productionDbConnection = process.env.DATABASE_URL || localPg;

module.exports = {

  development: {
    client: 'postgresql',
    connection: localPg,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'pg',
    connection: `postgres://postgres:${process.env.DATABASE_PASSWORD}@localhost/fboauth`,
    migrations: {
      directory: './data/seeds',
    },
    useNullAsDefault: true
  },

  production: {
    client: 'postgresql',
    connection: productionDbConnection,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};
