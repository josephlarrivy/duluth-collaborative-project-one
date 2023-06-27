const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("../config");

const { ExpressError, NotFoundError, UnauthorizedError, BadRequestError, ForbiddenError } = require('../ExpressError')




class User {

  static test() {
    return 'hitting model'
  }

  static async create(username, password, firstName, lastName, email) {
    
  }

  static async authenticate(username, password) {
    
  }
}

module.exports = User;