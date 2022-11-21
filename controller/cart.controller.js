const cartModel = require('../database/models/schema.js');

exports.getCartDetails = async (req, res) => {
    try {
        const cart = await cartModel.find();
        res.send({
            statusCode: 200,
            message: "list of all the users",
            error: false,
            data: cart,

        });
    } catch (error) {
        res.send({
            statusCode: 404,
            message: error.message,
            error: true,
            data: null,
        });
    }
}