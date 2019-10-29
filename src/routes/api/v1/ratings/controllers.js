const { User } = require('../../../../db/models');

const controllers = {
  createItem: async (req, res) => {
    const { body: { rate, bookId } } = req;

    const newRate = await User.create({
      rate,
      bookId,
    });

    res.json(newRate);
  },

  updateItem: async (req, res) => {
    const { body: { rate, bookId }, params: { id } } = req;

    const rating = await User.findOne({
      where: { id },
    });

    if (!rating) return res.sendStatus(404);

    const update = {};

    if (rate) update.rate = rate;
    if (bookId) update.bookId = bookId;

    const updatedRating = await rating.update(update);

    return res.json(updatedRating);
  },
};

module.exports = controllers;
