const express = require('express');
const router = express();
const cart = require("../controller/cart.controller");


//call controller to execute some functionalities
router.get('/', cart.getCartDetails);

module.exports = router;
