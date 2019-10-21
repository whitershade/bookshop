// models
const Book = require('../../../../db/models/Book');
const Author = require('../../../../db/models/Author');
const Genre = require('../../../../db/models/Genre');

const controllers = {
  getItem: async (req, res) => {
    const book = await Book.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Author,
          through: { attributes: [] },
        },
        {
          model: Genre,
          through: { attributes: [] },
        },
      ],
    });

    res.json(book);
  },
  getItems: async (req, res) => {
    const books = await Book.findAll({
      include: [
        {
          model: Author,
          through: { attributes: [] },
        },
        {
          model: Genre,
          through: { attributes: [] },
        },
      ],
    });

    res.json(books);
  },
};


module.exports = controllers;
