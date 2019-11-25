const { DATETIME } = require('../../../../../test/seed');

module.exports = [
  {
    id: 1,
    name: "Harry Potter and the Philosopher's Stone",
    createdAt: DATETIME,
    updatedAt: DATETIME,
    Authors: [
      {
        id: 1,
        name: 'Joanne Rowling',
        createdAt: DATETIME,
        updatedAt: DATETIME,
      },
    ],
    Genres: [
      {
        id: 1,
        name: 'Fantasy Fiction',
        createdAt: DATETIME,
        updatedAt: DATETIME,
      },
    ],
    Ratings: [
      {
        id: 1,
        rate: 10,
        createdAt: DATETIME,
        updatedAt: DATETIME,
        bookId: 1,
      },
      {
        id: 2,
        rate: 10,
        createdAt: DATETIME,
        updatedAt: DATETIME,
        bookId: 1,
      },
      {
        id: 3,
        rate: 10,
        createdAt: DATETIME,
        updatedAt: DATETIME,
        bookId: 1,
      },
      {
        id: 4,
        rate: 10,
        createdAt: DATETIME,
        updatedAt: DATETIME,
        bookId: 1,
      },
    ],
  },
  {
    id: 2,
    name: 'Harry Potter and the Chamber of Secrets',
    createdAt: DATETIME,
    updatedAt: DATETIME,
    Authors: [
      {
        id: 1,
        name: 'Joanne Rowling',
        createdAt: DATETIME,
        updatedAt: DATETIME,
      },
    ],
    Genres: [
      {
        id: 1,
        name: 'Fantasy Fiction',
        createdAt: DATETIME,
        updatedAt: DATETIME,
      },
    ],
    Ratings: [
      {
        id: 5,
        rate: 9,
        createdAt: DATETIME,
        updatedAt: DATETIME,
        bookId: 2,
      },
      {
        id: 6,
        rate: 8,
        createdAt: DATETIME,
        updatedAt: DATETIME,
        bookId: 2,
      },
      {
        id: 7,
        rate: 8,
        createdAt: DATETIME,
        updatedAt: DATETIME,
        bookId: 2,
      },
    ],
  },
  {
    id: 3,
    name: 'Harry Potter and the Prisoner of Azkaban',
    createdAt: DATETIME,
    updatedAt: DATETIME,
    Authors: [
      {
        id: 1,
        name: 'Joanne Rowling',
        createdAt: DATETIME,
        updatedAt: DATETIME,
      },
    ],
    Genres: [
      {
        id: 1,
        name: 'Fantasy Fiction',
        createdAt: DATETIME,
        updatedAt: DATETIME,
      },
    ],
    Ratings: [
      {
        id: 8,
        rate: 7,
        createdAt: DATETIME,
        updatedAt: DATETIME,
        bookId: 3,
      },
      {
        id: 9,
        rate: 8,
        createdAt: DATETIME,
        updatedAt: DATETIME,
        bookId: 3,
      },
      {
        id: 10,
        rate: 9,
        createdAt: DATETIME,
        updatedAt: DATETIME,
        bookId: 3,
      },
      {
        id: 11,
        rate: 8,
        createdAt: DATETIME,
        updatedAt: DATETIME,
        bookId: 3,
      },
      {
        id: 12,
        rate: 7,
        createdAt: DATETIME,
        updatedAt: DATETIME,
        bookId: 3,
      },
    ],
  },
  {
    id: 4,
    name: 'The Hobbit',
    createdAt: DATETIME,
    updatedAt: DATETIME,
    Authors: [
      {
        id: 2,
        name: 'John Ronald Reuel Tolkien',
        createdAt: DATETIME,
        updatedAt: DATETIME,
      },
    ],
    Genres: [
      {
        id: 1,
        name: 'Fantasy Fiction',
        createdAt: DATETIME,
        updatedAt: DATETIME,
      },
    ],
    Ratings: [
      {
        id: 13,
        rate: 10,
        createdAt: DATETIME,
        updatedAt: DATETIME,
        bookId: 4,
      },
    ],
  },
  {
    id: 5,
    name: 'The wind from the Sun',
    createdAt: DATETIME,
    updatedAt: DATETIME,
    Authors: [
      {
        id: 3,
        name: 'Sir Arthur Charles Clarke',
        createdAt: DATETIME,
        updatedAt: DATETIME,
      },
    ],
    Genres: [
      {
        id: 2,
        name: 'Science Fiction',
        createdAt: DATETIME,
        updatedAt: DATETIME,
      },
    ],
    Ratings: [
      {
        id: 14,
        rate: 9,
        createdAt: DATETIME,
        updatedAt: DATETIME,
        bookId: 5,
      },
    ],
  },
];
