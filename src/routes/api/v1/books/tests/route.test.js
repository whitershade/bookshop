/* global describe, it, expect */
const request = require('supertest');
const { omit } = require('lodash');

const books = require('./seed');
const app = require('../../../../../app');

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
          updatedAt: null,
          createdAt: null,
        },
      ],
      Genres: [
        {
          id: 1,
          name: 'Fantasy Fiction',
          updatedAt: null,
          createdAt: null,
        }],
    });
  });
});

describe('PATCH', () => {
  it('should update book', async () => {
    const res = await request(app).patch('/api/v1/books/6').send({
      name: 'Updated book',
      genreIds: [2],
      authorIds: [2],
    });
    expect(res.statusCode).toEqual(200);
    expect(omit(res.body, ['createdAt', 'updatedAt'])).toEqual({
      id: 6,
      name: 'Updated book',
      Ratings: [],
      Authors: [
        {
          id: 2,
          name: 'John Ronald Reuel Tolkien',
          updatedAt: null,
          createdAt: null,
        },
      ],
      Genres: [
        {
          id: 2,
          name: 'Science Fiction',
          updatedAt: null,
          createdAt: null,
        }],
    });
  });
});

describe('DELETE', () => {
  it('should delete book', async () => {
    const res = await request(app).delete('/api/v1/books/6');
    expect(res.statusCode).toEqual(200);

    const allBooksRes = await request(app).get('/api/v1/books');
    expect(allBooksRes.body).toEqual(books);
  });
});
