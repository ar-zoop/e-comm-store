const express = require('express');
const router = express();
const user=require("../controller/user.controller");

//call controller to execute some functionalities
router.get('/', user.getUserDetails);
router.post('/', user.setUserDetails);
module.exports = router;
