"use strict";
require("colors");
require('dotenv').config();


const SECRET_KEY = process.env.SECRET_KEY || "doNotTell";
const PORT = +process.env.PORT || 3001;

function getDatabaseUri() {
  return (process.env.NODE_ENV === "development")
    ? "postgresql://localhost:5432/duluthCollaborationWorkingDBTesting"
    : process.env.DATABASE_URL || "postgresql://localhost:5432/duluthCollaborationWorkingDB";
}


const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "development" ? 1 : 12;

console.log(" ");
console.log("------------------------");
console.log("APPLICATION CONFIGURATION:".green.bold);
console.log("Status:".blue.bold, "* ".red + "Server Running".green + " *".red)
console.log("NODE_ENV:".blue.bold, process.env.NODE_ENV)
console.log("Listening on port:".blue.bold, PORT.toString());
console.log("SECRET_KEY:".blue.bold, SECRET_KEY);
console.log("BCRYPT_WORK_FACTOR:".blue.bold, BCRYPT_WORK_FACTOR);
console.log("Database:".blue.bold, getDatabaseUri());
console.log("------------------------");
console.log(" ");

module.exports = {
  SECRET_KEY,
  PORT,
  BCRYPT_WORK_FACTOR,
  getDatabaseUri,
};