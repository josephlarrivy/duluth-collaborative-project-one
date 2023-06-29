const User = require('../models/User');
const bcrypt = require('bcrypt');
const db = require('../db');

jest.mock('bcrypt');
jest.mock('../db');

let user;

describe('User Model', () => {
  beforeEach(() => {
    user = new User();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    db.end();
  });

  describe('test method', () => {
    it('should call the test method', async () => {
      const resp = await user.test();
      expect(resp).toBe('hitting model');
    });
  });

  describe('insert method', () => {
    it('should insert a user into the database', async () => {
      const testUser = {
        username: 'test_username',
        password: 'test_password',
        first_name: 'Test',
        last_name: 'User',
        email: 'user@test.com',
      };

      db.query
        .mockResolvedValueOnce({ rows: [] })
        .mockResolvedValueOnce({ rows: [testUser] });

      const resp = await user.insert(testUser);
      expect(resp).toEqual(testUser);
    });
  });
});
