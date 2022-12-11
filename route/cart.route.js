const express = require('express');
const router = express.Router();
const cart = require("../controller/cart.controller");


//call controller to execute some functionalities
router.get('/', cart.getCartDetails);
router.post('/', cart.setCartDetails);


module.exports = router;
