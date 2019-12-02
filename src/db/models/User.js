/* eslint-disable no-param-reassign */
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');
const { getPasswordHashAndSalt } = require('../../utils/getHashPasswordAndSalt');

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
    validate: { isEmail: true },
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
      const { passwordHash: password, salt } = await getPasswordHashAndSalt(user.password);
      user.password = password;
      user.salt = salt;
    },
    beforeBulkCreate: async (users) => {
      const hashArr = users.map(((user) => getPasswordHashAndSalt(user.password)));

      users.forEach((user, i) => {
        user.password = hashArr[i].passwordHash;
        user.salt = hashArr[i].salt;
      });
    },
  },
});

module.exports = User;
