
const jsonschema = require("jsonschema");
const User = require('../models/User')
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



router.post("/register", async function (req, res, next) {
  
});


router.post("/login", async function (req, res, next) {
  
});


module.exports = router;