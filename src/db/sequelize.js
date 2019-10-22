const Sequelize = require('sequelize');

const {
  MYSQL_DIALECT, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_USER, MYSQL_DATABASE, MYSQL_PORT,
} = process.env;

const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, {
  host: MYSQL_HOST,
  dialect: MYSQL_DIALECT,
  port: MYSQL_PORT,
});

module.exports = sequelize;
