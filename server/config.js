"use strict";
require("colors");

const SECRET_KEY = process.env.SECRET_KEY || "doNotTell";
const PORT = +process.env.PORT || 3001;

function getDatabaseUri() {
  return (process.env.NODE_ENV === "test")
    ? "duluth-collaboration-working-db-testing"
    : process.env.DATABASE_URL || "duluth-collaboration-working-db";
}


const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

console.log(" ");
console.log("------------------------");
console.log("APPLICATION CONFIGURATION:".green.bold);
console.log("Status".blue.bold, "Server Running".green)
console.log("Listening on port".blue.bold, PORT.toString());
console.log("SECRET_KEY:".blue.bold, SECRET_KEY);
console.log("BCRYPT_WORK_FACTOR".blue.bold, BCRYPT_WORK_FACTOR);
console.log("Database:".blue.bold, getDatabaseUri());
console.log("------------------------");
console.log(" ");

module.exports = {
  SECRET_KEY,
  PORT,
  BCRYPT_WORK_FACTOR,
  getDatabaseUri,
};