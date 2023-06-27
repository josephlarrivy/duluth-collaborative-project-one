
const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("../config");

const { ExpressError, NotFoundError, UnauthorizedError, BadRequestError, ForbiddenError } = require('../ExpressError')




class User {

  static async register(
    { username, password, firstName, lastName, email }) {
    
  }


  static async authenticate(username, password) {
    
  }
}

module.exports = User;