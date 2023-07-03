"use strict";

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { NotFoundError } = require("./ExpressError");
const authRoutes = require("./routes/usersRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use("/users", authRoutes);


app.use(function (req, res, next) {
    return next(new NotFoundError());
});

app.use(function (err, req, res, next) {
    if (process.env.NODE_ENV !== "development") console.error(err.stack);
    const status = err.status || 500;
    const message = err.message;

    return res.status(status).json({
        error: { message, status },
    });
});

module.exports = app;