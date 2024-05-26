const request = require('supertest');
const app = require('../app');

describe('GET /:p1/:p2/:p3', () => {
  it('should return 400 for invalid input', async () => {
    const res = await request(app).get('/31/15/15');
    expect(res.statusCode).toEqual(400);
    expect(res.text).toEqual('Invalid input');
  });

  it('should return the correct calculation for valid input', async () => {
    const res = await request(app).get('/3/4/5');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ draws: 6 });
  });
  it('should return the correct calculation for valid input', async () => {
    const res = await request(app).get('/1/1/2');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ draws: 2 });
  });
  it('should return the correct calculation for valid input', async () => {
    const res = await request(app).get('/3/3/3');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ draws: -1 });
  });
});
