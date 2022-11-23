const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
// const {route}= require('./user.route');
const auth = require('../controller/auth.login.controller.js');

router.post("/", auth.login);

module.exports = router;

