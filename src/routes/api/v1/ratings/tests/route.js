/* global describe, it, expect, beforeAll, afterAll */
const request = require('supertest');
const { omit } = require('lodash');
const { spawn } = require('child-process-promise');

const { app, server } = require('../../../../../app');


afterAll((done) => {
  server.close();
  done();
});

describe('POST', () => {
  it('should create Rating', async () => {
    const res = await request(app)
      .post('/api/v1/ratings')
      .send({
        bookId: 3,
        rate: 10,
      });

    expect(res.statusCode).toEqual(200);
    // expect(omit(res.body, ['createdAt', 'updatedAt'])).toEqual({
    //   id: 6,
    //   name: 'Harry Potter and the Goblet of Fire',
    //   Ratings: [],
    //   Authors: [
    //     {
    //       id: 1,
    //       name: 'Joanne Rowling',
    //       updatedAt: null,
    //       createdAt: null,
    //     },
    //   ],
    //   Genres: [
    //     {
    //       id: 1,
    //       name: 'Fantasy Fiction',
    //       updatedAt: null,
    //       createdAt: null,
    //     }],
    // });
  });
});

// describe('PATCH', () => {
//   it('should update book', async () => {
//     const res = await request(app).patch('/api/v1/books/6').send({
//       name: 'Updated book',
//       genreIds: [2],
//       authorIds: [2],
//     });
//     expect(res.statusCode).toEqual(200);
//     expect(omit(res.body, ['createdAt', 'updatedAt'])).toEqual({
//       id: 6,
//       name: 'Updated book',
//       Ratings: [],
//       Authors: [
//         {
//           id: 2,
//           name: 'John Ronald Reuel Tolkien',
//           updatedAt: null,
//           createdAt: null,
//         },
//       ],
//       Genres: [
//         {
//           id: 2,
//           name: 'Science Fiction',
//           updatedAt: null,
//           createdAt: null,
//         }],
//     });
//   });
// });
