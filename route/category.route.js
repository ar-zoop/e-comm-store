const express = require('express');
const router = express.Router();
const category = require("../controller/category.controller");

//call controller to execute some functionalities
router.get('/', category.getCategoryDetails);
router.post('/',category.setCategoryDetails);
module.exports = router;
