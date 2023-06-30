const User = require('../models/User');
const bcrypt = require('bcrypt');
const pgp = require('pg-promise')();

let connectionString = 'postgresql://localhost:5432/duluthCollaborationWorkingDBTesting';
const dbConfig = { connectionString };

let db = pgp(connectionString);

let user;
let testUser = {
  username: 'test_username',
  password: 'test_password',
  first_name: 'Test',
  last_name: 'User',
  email: 'user@test.com'
};

describe('User Model Integration Tests', () => {
  beforeAll(async () => {
    db = pgp(dbConfig);
  });

  beforeEach(() => {
    user = new User(db);
  });

  afterAll(async () => {
    await db.none('DELETE FROM users');
    await pgp.end();
  });

  describe('insert method', () => {
    it('should insert a user into the database', async () => {
      const insertedUser = await user.insert(testUser);

      expect(insertedUser).toEqual({
        username: 'test_username',
        first_name: 'Test',
        last_name: 'User',
        email: 'user@test.com'
      });

    });
  });
});