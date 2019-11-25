/* eslint-disable no-param-reassign */
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');
const { getHashPasswordAndSalt } = require('../../utils/getHashPasswordAndSalt');

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
  salt: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'user',
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'User',
  hooks: {
    beforeCreate: async (user) => {
      const { passwordHash: password, salt } = await getHashPasswordAndSalt(user.password);
      user.password = password;
      user.salt = salt;
    },
    beforeBulkCreate: async (users) => {
      const hashArr = await Promise.all(
        users.map(((user) => getHashPasswordAndSalt(user.password))),
      );
      users.forEach((user, i) => {
        user.password = hashArr[i].password;
        user.salt = hashArr[i].salt;
      });
    },
  },
});

module.exports = User;
