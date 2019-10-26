const { size } = require('lodash');

const {
  Book, Author, Genre, Rating,
} = require('../../../../db/models');

const defaultInclude = [
  {
    model: Author,
    through: { attributes: [] },
  },
  {
    model: Genre,
    through: { attributes: [] },
  },
  {
    model: Rating,
  },
];

const controllers = {
  getItem: async (req, res) => {
    const book = await Book.findOne({
      where: {
        id: req.params.id,
      },
      include: defaultInclude,
    });

    res.json(book);
  },

  createItem: async (req, res) => {
    const { name, authorIds, genreIds } = req.body;

    const book = await Book.create({
      name,
    });

    await Promise.all([
      book.addAuthors(authorIds),
      book.addGenres(genreIds),
    ]);

    const bookWithIncludes = await Book.findOne({
      where: {
        id: book.id,
      },
      include: defaultInclude,
    });

    res.json(bookWithIncludes);
  },

  updateItem: async (req, res) => {
    const { params: { id }, body: { name, authorIds, genreIds } } = req;

    const book = await Book.findOne({
      where: { id },
      include: defaultInclude,
    });

    if (!book) return res.sendStatus(404);
    if (name) await book.update({ name });

    const updateIncludes = [];
    if (size(authorIds)) updateIncludes.push(book.setAuthors(authorIds));
    if (size(genreIds)) updateIncludes.push(book.setGenres(genreIds));
    await Promise.all(updateIncludes);

    const newBook = await Book.findOne({
      where: {
        id,
      },
      include: defaultInclude,
    });

    return res.json(newBook);
  },

  deleteItem: async (req, res) => {
    const book = await Book.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!book) return res.sendStatus(404);

    await Book.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.sendStatus(200);
  },

  getItems: async (req, res) => {
    const books = await Book.findAll({
      include: defaultInclude,
    });

    res.json(books);
  },
};

module.exports = controllers;
