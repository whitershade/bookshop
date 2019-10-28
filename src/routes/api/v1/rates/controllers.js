const { Rating } = require('../../../../db/models');

const controllers = {
  createItem: async (req, res) => {
    const { body: { rate, bookId } } = req;

    const newRate = await Rating.create({
      rate,
      bookId,
    });

    res.json(newRate);
  },

  updateItem: async (req, res) => {
    const { body: { rate }, params: { id } } = req;

    const rating = await Rating.findOne({
      where: { id },
    });

    if (!rating) return res.sendStatus(404);

    const newRating = await rating.update({ rate });

    return res.json(newRating);
  },
};

module.exports = controllers;
