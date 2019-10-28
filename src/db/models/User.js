const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class User extends Model {}

User.init({
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    len: [2, 50],
    trim: true,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    len: [2, 50],
    trim: true,
  },
  avatar: {
    type: DataTypes.BLOB,
  },
}, { sequelize, modelName: 'User' });

module.exports = User;
