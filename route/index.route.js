const express = require('express');
const router= express();
const userRoute= require('./user.route.js');
const categoryRoute = require('./category.route.js');
const cartRoute = require('./cart.route.js');
const productRoute = require('./product.route.js');
const { urlencoded } = require('express');

router.use("/user", userRoute);
router.get('/', (req, res) => {
    res.send('user.route.js')
});
/*
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
*/
module.exports= router;
