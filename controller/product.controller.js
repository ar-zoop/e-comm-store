const productModel = require('../database/models/product.js');;

exports.getProductDetails= async(req,res)=>{
    try {
        const product = await productModel.find();
        res.send({
            statusCode: 200,
            message: "Product details: ",
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

exports.getProductDetails = async (req, res) => {

    try {
        const [name, address, dob] = req.body;
        console.log(userData);
        if (req.body.userData != " ") {
            res.send({
                statusCode: 200,
                message: "Data sent successfully",
                error: false,
                data: name

            });
        }
    } catch (error) {
        res.send({
            statusCode: 404,
            message: error.message,
            error: true,
            data: null,
        });
    }
};