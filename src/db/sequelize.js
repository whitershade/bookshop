const Sequelize = require('sequelize');

const {
  DB_HOSTNAME, MYSQL_PASSWORD, MYSQL_USER, MYSQL_DATABASE,
} = process.env;

const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, {
  host: DB_HOSTNAME,
  dialect: DB_HOSTNAME,
});

module.exports = sequelize;
