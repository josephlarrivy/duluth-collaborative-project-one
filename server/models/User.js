const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("../config");
const db = require('../db')

const { ExpressError, NotFoundError, UnauthorizedError, BadRequestError, ForbiddenError } = require('../ExpressError')




class User {

  // adds a user to the database
  async insert({username, password, first_name, last_name, email}) {
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
      RETURNING username, first_name, last_name, email`,
      [username, hashedPassword, first_name, last_name, email],
    );

    const user = result.rows[0];
    return user;
  }

  // authenticates a user
  async authenticate(username, password) {
    const result = await db.query(
      `SELECT username, password, first_name, last_name, email
        FROM users
        WHERE username = $1`,
      [username],
    );
    const user = result.rows[0];
    if (user) {
      const isValid = await bcrypt.compare(password, user.password);
      if (isValid === true) {
        return user;
      }
    } else {
      throw new UnauthorizedError("Invalid username or password");
    }
  }

  // gets all users
  async getAllUsers() {
    const result = await db.query(
      `SELECT
      username, first_name, last_name, email
      FROM users`
    )
    return result.rows
  }

  async deleteUser(username) {
    let result = await db.query(
      `DELETE FROM users WHERE username = $1 RETURNING username`,
      [username],
    );
    const user = result.rows[0];
    if (!user) throw new NotFoundError(`No user: ${username}`);
    return user
  }
  

  test() {
    return 'hitting model';
  }
}

module.exports = User;