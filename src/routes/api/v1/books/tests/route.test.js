/* global describe, it, expect, beforeEach, afterAll */
const request = require('supertest');
const { omit } = require('lodash');
const {
  seedDb, clearDb, DATETIME,
} = require('../../../../../test/seed');
const sequelize = require('../../../../../db/sequelize');

const books = require('./seed');
const { app } = require('../../../../../app');

beforeEach(async () => {
  await sequelize.sync();
  await clearDb();
  await seedDb();
});

afterAll(async () => {
  await sequelize.close();
});

describe('GET', () => {
  it('should return all books', async () => {
    const res = await request(app)
      .get('/api/v1/books');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(books);
  });

  it('should return book by id', async () => {
    const res = await request(app)
      .get('/api/v1/books/1');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(books.find(({ id }) => id === 1));
  });
});

describe('POST', () => {
  it('should create book', async () => {
    const res = await request(app)
      .post('/api/v1/books')
      .send({
        name: 'Harry Potter and the Goblet of Fire',
        genreIds: [1],
        authorIds: [1],
      });

    expect(res.statusCode).toEqual(200);
    expect(omit(res.body, ['createdAt', 'updatedAt'])).toEqual({
      id: 6,
      name: 'Harry Potter and the Goblet of Fire',
      Ratings: [],
      Authors: [
        {
          id: 1,
          name: 'Joanne Rowling',
          updatedAt: DATETIME,
          createdAt: DATETIME,
        },
      ],
      Genres: [
        {
          id: 1,
          name: 'Fantasy Fiction',
          updatedAt: DATETIME,
          createdAt: DATETIME,
        }],
    });
  });
});

describe('PATCH', () => {
  it('should update book', async () => {
    const res = await request(app).patch('/api/v1/books/5').send({
      name: 'Updated book',
      genreIds: [2],
      authorIds: [2],
    });
    expect(res.statusCode).toEqual(200);
    expect(omit(res.body, ['createdAt', 'updatedAt'])).toEqual({
      id: 5,
      name: 'Updated book',
      Ratings: [
        {
          bookId: 5,
          createdAt: '2019-11-12T08:19:13.000Z',
          id: 14,
          rate: 9,
          updatedAt: '2019-11-12T08:19:13.000Z',
        },
      ],
      Authors: [
        {
          id: 2,
          name: 'John Ronald Reuel Tolkien',
          updatedAt: DATETIME,
          createdAt: DATETIME,
        },
      ],
      Genres: [
        {
          id: 2,
          name: 'Science Fiction',
          updatedAt: DATETIME,
          createdAt: DATETIME,
        }],
    });
  });
});

describe('DELETE', () => {
  it('should delete book', async () => {
    const res = await request(app).delete('/api/v1/books/5');
    expect(res.statusCode).toEqual(200);

    const allBooksRes = await request(app).get('/api/v1/books');
    const allBooksWithoutLast = books.slice(0, -1);
    expect(allBooksRes.body).toEqual(allBooksWithoutLast);
  });
});
