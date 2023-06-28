const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("../config");

const { ExpressError, NotFoundError, UnauthorizedError, BadRequestError, ForbiddenError } = require('../ExpressError')




class User {

  
  static async create(username, password, first_name, last_name, email) {
    
  }

  static async authenticate(username, password) {
    
  }



  static test() {
    return 'hitting model'
  }

}

module.exports = User;