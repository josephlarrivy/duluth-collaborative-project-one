const jsonschema = require("jsonschema");
const User = require('../models/User')
const { createToken } = require("../helpers/tokens");
const newUserSchema = require('../schemas/newUserSchema.json')
const userLogInSchema = require('../schemas/userLoginSchema.json')
const { ExpressError,
  NotFoundError,
  UnauthorizedError,
  BadRequestError,
  ForbiddenError } = require('../ExpressError')

const express = require("express");
const router = new express.Router();

const user = new User()

// creates a new user
router.post("/", async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, newUserSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }
    const newUser = await user.insert(req.body);
    const token = createToken(newUser);
    return res.status(201).json({ token });
  } catch (err) {
    if (err instanceof BadRequestError) {
      return res.status(400).json({ message: err.message });
    }
    return next(err);
  }
});

// allows a user to log in
router.post("/login", async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, userLogInSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }
    const { username, password } = req.body;
    const result = await user.authenticate(username, password);
    const token = createToken(result);
    return res.status(200).json({ token });
  } catch (err) {
    return next(err);
  }
});

// gets all users
router.get("/", async function (req, res, next) {
  try {
    const users = await user.getAllUsers()
    return res.status(200).send(users)
  } catch (err) {
    if (err instanceof BadRequestError) {
      return res.status(400).json({ message: err.message });
    }
    return next(err);
  }
});

// deletes a user
router.delete("/:username", async function (req, res, next) {
  try {
    const username = req.params.username;
    const result = await user.deleteUser(username)
    console.log(result)
    return res.status(200).send(result)
  } catch (err) {
    if (err instanceof BadRequestError) {
      return res.status(400).json({ message: err.message });
    }
    return next(err)
  }
})












router.get('/test/route', (req, res, next) => {
  return res.json({ 'status': 'hitting route' })
})

router.get('/test/model', (req, res, next) => {
  const resp = User.test()
  return res.json({ 'status': resp })
})


module.exports = router;