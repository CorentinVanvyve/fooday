// config.js
require('dotenv').config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "port": process.env.DB_PORT || "5432",
    "database": "fooday_database_development",
    "host": DB_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "port": process.env.DB_PORT || "5432",
    "database": "fooday_database_test",
    "host": DB_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "port": process.env.DB_PORT || "5432",
    "database": "fooday_database_production",
    "host": DB_HOST,
    "dialect": "postgres"
  }
}
