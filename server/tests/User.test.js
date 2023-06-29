const User = require('../models/User');
const bcrypt = require('bcrypt');
const db = require('../db');

// jest.mock('bcrypt');
// jest.mock('../db');

let user;

describe('User Model', () => {
  describe('insert', () => {

    beforeEach(() => {
      user = new User()
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    afterAll(() => {
      db.end(); 
    });

    it('should call the test method', async () => {
      const resp = await User.test();
      console.log(resp);
    });


  });

});
