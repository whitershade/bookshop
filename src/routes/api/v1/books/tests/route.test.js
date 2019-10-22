const request = require('supertest');
const app = require('../../../../../app');
const book = require('./seed');

describe('Get Endpoints', () => {
  it('should return all books', async () => {
    const res = await request(app)
      .get('/api/v1/books');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([book]);
  });

  it('should return book by id', async () => {
    const res = await request(app)
      .get('/api/v1/books/1');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(book);
  });
});