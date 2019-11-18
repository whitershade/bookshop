/* global describe, it, expect, beforeEach, afterAll */
const request = require('supertest');
const { omit } = require('lodash');
const {
  seedDb, clearDb,
} = require('../../../../../test/seed');
const { app, server } = require('../../../../../app');
const sequelize = require('../../../../../db/sequelize');

beforeEach(async () => {
  await sequelize.sync();
  await clearDb();
  await seedDb();
});

afterAll(async () => {
  await sequelize.close();
  await server.close();
});

const rate = { bookId: 3, rate: 10 };

describe('POST', () => {
  it('should create Rating', async () => {
    const res = await request(app)
      .post('/api/v1/ratings')
      .send(rate);

    expect(res.statusCode).toEqual(200);
    expect(omit(res.body, ['id', 'createdAt', 'updatedAt'])).toEqual(rate);
  });
});

describe('PATCH', () => {
  it('should update Rating', async () => {
    const createdRes = await request(app)
      .post('/api/v1/ratings')
      .send(rate);

    const updatedRes = await request(app)
      .patch(`/api/v1/ratings/${createdRes.body.id}`);

    expect(omit(updatedRes.body, ['createdAt', 'updatedAt'])).toEqual({
      ...rate,
      id: createdRes.body.id,
    });
  });
});
