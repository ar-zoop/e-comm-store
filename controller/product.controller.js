const productModel = require('../database/models/schema.js');;

exports.getProductDetails= async(req,res)=>{
    try {
        const product = await productModel.find();
        res.send({
            statusCode: 200,
            message: "list of all the users",
            error: false,
            data: product,

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