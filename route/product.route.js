const express = require('express');
const router = express();
const product = require("../controller/product.controller");

//call controller to execute some functionalities
router.get('/', product.getProductDetails);
module.exports = router;
