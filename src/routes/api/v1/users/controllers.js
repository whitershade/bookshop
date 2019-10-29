const fs = require('fs');
const path = require('path');
const { first } = require('lodash');
const { getAvatarPath } = require('./utils');
const { User } = require('../../../../db/models');

const destinationPath = path.join(__dirname, '..', '..', '..', '..', '..', 'public');

const controllers = {
  createItem: async (req, res) => {
    const { body: { firstName, lastName }, files: { avatar } } = req;

    const newUser = await User.create({
      firstName,
      lastName,
      avatarURL: getAvatarPath(first(avatar).path),
    });

    res.json(newUser);
  },
  updateItem: async (req, res) => {
    const { params: { id }, body: { firstName, lastName }, files: { avatar } } = req;
    let filePath;

    const user = await User.findOne({
      where: { id },
    });

    if (!user) return res.sendStatus(404);

    const update = {};

    if (firstName) update.firstName = firstName;
    if (lastName) update.lastName = lastName;
    if (avatar) {
      filePath = user.avatarURL;
      fs.unlinkSync(`${destinationPath}/${filePath}`);

      update.avatarURL = getAvatarPath(first(avatar).path);
    }

    const updatedUser = await user.update(update);

    return res.json(updatedUser);
  },
};

module.exports = controllers;
