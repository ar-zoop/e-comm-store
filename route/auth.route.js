const express = require('express');
const router = express.Router();
// const {route}= require('./user.route');
const auth= require('../controller/auth.controller.js');

router.post("/", auth.signup);

module.exports = router;

