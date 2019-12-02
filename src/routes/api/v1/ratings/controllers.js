const { Rating } = require('../../../../db/models');

const controllers = {
  createItem: async (req, res) => {
    const { body: { rate, bookId }, user: { id: userId } } = req;

    const newRate = await Rating.create({
      rate,
      bookId,
      userId,
    });

    res.json(newRate);
  },

  updateItem: async (req, res) => {
    const { body: { rate, bookId }, params: { id }, user: { id: userId } } = req;

    const rating = await Rating.findOne({
      where: { id },
    });

    if (!rating) return res.sendStatus(404);
    if (userId !== rating.userId) return res.sendStatus(403);

    const update = {};

    if (rate) update.rate = rate;
    if (bookId) update.bookId = bookId;

    const updatedRating = await rating.update(update);

    return res.json(updatedRating);
  },
};

module.exports = controllers;
