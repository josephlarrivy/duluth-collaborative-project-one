const routes = require('../routes/usersRoutes')
const request = require('supertest');
const app = require('../app');


describe('User Routes', () => {
  describe('GET /test/route', () => {
    test('should return JSON with status "hitting route"', async () => {
      const response = await request(app).get('/users/test/route');
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({ status: 'hitting route' });
    });
  });
});
