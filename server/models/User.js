const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("../config");
const db = require('../db')

const { ExpressError, NotFoundError, UnauthorizedError, BadRequestError, ForbiddenError } = require('../ExpressError')




class User {

  static async insert(username, password, first_name, last_name, email) {
    const duplicateCheck = await db.query(
      `SELECT username
           FROM users
           WHERE username = $1`,
      [username],
    );
    if (duplicateCheck.rows[0]) {
      throw new BadRequestError(`Duplicate username: ${username}`);
    }
    const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
    const result = await db.query(
      `INSERT INTO users
           (username, password, first_name, last_name, email)
           VALUES ($1, $2, $3, $4, $5)
           RETURNING username, firstname AS "firstName", lastname AS "lastName", email`,
      [username, password, first_name, last_name, email],
    );
    const user = result.rows[0];
    return user;
  }


  static async authenticate(username, password) {
    
  }



  static async test() {
    return 'hitting model';
  }
}

module.exports = User;