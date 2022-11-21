const express = require('express');
const router = express();
const category = require("../controller/category.controller");

//call controller to execute some functionalities
router.get('/', category.getCategoryDetails());
module.exports = router;
