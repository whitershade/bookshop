/* global describe, it, expect */
const request = require('supertest');

const books = require('./seed');
const app = require('../../../../../app');

describe('Get Endpoints', () => {
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
