const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const { first, get } = require('lodash');
const { promisfy } = require('promisfy');
const { getAvatarPath } = require('./utils');
const { sha512 } = require('../../../../utils/getHashPasswordAndSalt');
const { User } = require('../../../../db/models');

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
    const newUser = await User.create({
      email,
      password,
      firstName,
      lastName,
      avatarURL: avatar ? getAvatarPath(first(avatar).path) : null,
    });

    res.json(newUser);
  },
  updateItem: async (req, res) => {
    const {
      params: { id }, body: {
        firstName, lastName, password, role,
      },
    } = req;
    const avatar = get(req, 'files.avatar');
    let filePath;

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

    const updatedUser = await user.update(update);

    return res.json(updatedUser);
  },
  login: async (req, res) => {
    const { email, password } = req.body;

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
    const jwtToken = await sign(payload, 'secret', { expiresIn: 3600 });
    res.cookie('jwtToken', jwtToken);

    return res.json({ jwtToken });
  },
  logout: (req, res) => {
    res.clearCookie('token');

    return res.sendStatus(200);
  },
};

module.exports = controllers;
