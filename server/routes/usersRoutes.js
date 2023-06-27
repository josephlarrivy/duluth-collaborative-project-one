
const jsonschema = require("jsonschema");
const User = require('../models/users')
const { createToken } = require("../helpers/tokens");
const { ExpressError,
  NotFoundError,
  UnauthorizedError,
  BadRequestError,
  ForbiddenError } = require('../ExpressError')


const express = require("express");
const router = new express.Router();



router.get('/test', (req, res, next) => {
  return res.json({'status':'good connection'})
})


// creates a new user
router.post("/", async function (req, res, next) {
  
});

// allows a user to log in
router.post("/login", async function (req, res, next) {
  
});


module.exports = router;