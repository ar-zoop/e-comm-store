const express = require('express');
const router = express.Router();
const userRoute= require('./user.route.js');
const categoryRoute = require('./category.route.js');
const cartRoute = require('./cart.route.js');
const productRoute = require('./product.route.js');
const signupRoute = require('./auth.signup.route.js');
const loginRoute= require('./auth.login.route.js');
const authMiddleware= require('../middleware/auth.middleware');
const { urlencoded } = require('express');

//Time for middleware in every function for verification of token.
router.use(authMiddleware.verifyToken);

router.use("/signup", signupRoute);
router.post('/', (req, res) => {
    res.send("auth.signup.route.js")
});

router.use("/login", loginRoute);
router.post('/', (req, res) => {
    res.send("auth.login.route.js")
});

router.use("/user", userRoute);
router.get('/', (req, res) => {
    res.send('user.route.js')
});

router.use("/product", productRoute);
router.get('/', (req, res) => {
    res.send('product.route.js')
});

router.use("/cart", cartRoute);
router.get('/', (req, res) => {
    res.send('cart.route.js')
});

router.use("/category", categoryRoute);
router.get('/', (req, res) => {
    res.send('category.route.js')
});



module.exports= router;
