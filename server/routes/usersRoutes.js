
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



router.get('/test/route', (req, res, next) => {
  return res.json({'status' : 'hitting route'})
})

router.get('/test/model', (req, res, next) => {
  const resp = User.test()
  return res.json({ 'status' : resp })
})


// creates a new user
router.post("/", async function (req, res, next) {
  
});

// allows a user to log in
router.post("/login", async function (req, res, next) {
  
});


module.exports = router;