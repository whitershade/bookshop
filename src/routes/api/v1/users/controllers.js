const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const { first, get, omit } = require('lodash');
const { promisfy } = require('promisfy');
const logger = require('../../../../logger');
const { getAvatarPath } = require('./utils');
const { sha512 } = require('../../../../utils/getHashPasswordAndSalt');
const { User } = require('../../../../db/models');
const { jwtSecret } = require('../../../../../.credentials');

const sign = promisfy(jwt.sign);
const destinationPath = path.join(__dirname, '..', '..', '..', '..', '..', 'public');

const controllers = {
  createItem: async (req, res) => {
    const {
      body: {
        firstName, lastName, password, email,
      },
    } = req;

    const avatar = get(req, 'files.avatar');

    try {
      const { dataValues: user } = await User.create({
        email,
        password,
        firstName,
        lastName,
        avatarURL: avatar ? getAvatarPath(first(avatar).path) : null,
      });

      res.json(omit(user, 'password', 'salt'));
    } catch (e) {
      logger.error(e);

      res.sendStatus(500);
    }
  },
  updateItem: async (req, res) => {
    const {
      params: { id }, body: {
        firstName, lastName, password, role,
      },
    } = req;
    const avatar = get(req, 'files.avatar');
    let filePath;

    try {
      const user = await User.findOne({
        where: { id },
      });

      if (!user) return res.sendStatus(404);

      const update = {};

      if (firstName) update.firstName = firstName;
      if (lastName) update.lastName = lastName;
      if (password) update.password = password;
      if (role) update.role = role;
      if (avatar) {
        filePath = user.avatarURL;
        if (filePath) fs.unlinkSync(`${destinationPath}/${filePath}`);

        update.avatarURL = getAvatarPath(first(avatar).path);
      }

      const { dataValues: updatedUser } = await user.update(update);

      return res.json(omit(updatedUser, 'password', 'salt'));
    } catch (e) {
      logger.error(e);

      res.sendStatus(500);
    }
  },
  deleteItem: async (req, res) => {
    try {
      const user = await User.findOne({
        where: { id: req.params.id },
      });

      if (!user) return res.sendStatus(404);

      await User.destroy({
        where: { id: req.params.id },
      });

      return res.sendStatus(200);
    } catch (e) {
      logger.error(e);

      return res.sendStatus(500);
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({
        where: { email },
      });

      if (!user) return res.sendStatus(403);

      const { passwordHash: loginPass } = await sha512(password, user.salt);

      if (loginPass !== user.password) return res.sendStatus(403);

      const payload = {
        name: user.name,
        login: user.email,
        id: user.id,
        role: user.role,
      };
      const jwtToken = await sign(payload, jwtSecret, { expiresIn: 3600 });
      res.cookie('jwtToken', jwtToken);

      return res.sendStatus(200);
    } catch (e) {
      logger.error(e);

      return res.sendStatus(500);
    }
  },
  logout: (req, res) => {
    res.clearCookie('jwtToken');

    return res.sendStatus(200);
  },
};

module.exports = controllers;
