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
  avatarURL: {
    type: DataTypes.STRING,
    len: [2, 50],
    trim: true,
  },
}, { sequelize, modelName: 'User' });

module.exports = User;
