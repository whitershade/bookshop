const { size, round } = require('lodash');

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
      where: { id: req.params.id },
      include: defaultInclude,
    });

    res.json(book);
  },

  createItem: async (req, res) => {
    const { name, authorIds, genreIds } = req.body;
    console.log(name, authorIds, genreIds);

    const book = await Book.create({ name });

    await Promise.all([
      book.addAuthors(authorIds),
      book.addGenres(genreIds),
    ]);

    const bookWithIncludes = await Book.findOne({
      where: { id: book.id },
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
      where: { id },
      include: defaultInclude,
    });

    return res.json(newBook);
  },

  deleteItem: async (req, res) => {
    const book = await Book.findOne({
      where: { id: req.params.id },
    });

    if (!book) return res.sendStatus(404);

    await Book.destroy({
      where: { id: req.params.id },
    });

    return res.sendStatus(200);
  },

  getItems: async (req, res) => {
    const books = await Book.findAll({ include: defaultInclude });

    res.json(books);
  },

  searchItems: async (req, res) => {
    const { author, minRate } = req.query;

    if (!author && !minRate) return res.sendStatus(403);

    let books;

    if (author) {
      books = await Book.findAll({
        where: { '$Authors.name$': author },
        include: defaultInclude,
      });
    } else {
      books = await Book.findAll({ include: defaultInclude });
    }

    if (!minRate) return res.json(books);

    const booksFilteredByMinRating = books.filter((book) => {
      const sumOfRates = book.Ratings.reduce((accum, { rate }) => accum + rate, 0);
      const averageRate = round(sumOfRates / size(book.Ratings), 2);

      if (averageRate >= minRate) return true;

      return false;
    });

    return res.json(booksFilteredByMinRating);
  },
};

module.exports = controllers;
