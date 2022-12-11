const cartModel = require('../database/models/cart.js');

exports.getCartDetails = async (req, res) => {
    try {
        const cart = await cartModel.findOne();
        res.send({
            statusCode: 200,
            message: "Cart details: ",
            error: false,
            data: cart

        });
    } catch (error) {
        res.send({
            statusCode: 401,
            message: error.message,
            error: true,
            data: null
        });
    };
}

exports.setCartDetails=(req,res)=>{
    try{
        const [products, sub_total]= req.body;        
        const cartExist= findOne(products);
        if(cartExist){
            res.send({
                statusCode: 200,
                error: false,
                message: "Saved cart has same content.",
                data: cartExist
            })
        }
        else{
            const newCart= new cartModel({
                products: [{
                    name: products.name,
                    original_price: products.original_price,
                    discount_price: products.discount_price,
                    qty: products.qty,
                    description: products.description
                }],
                sub_total: sub_total
            });
            newCart.save();
            res.send({
                statusCode: 200,
                error: false,
                message: "Cart created",
                data: newCart
            });
        };
        
    }
    catch(error){
        res.send({
            statusCode: 401,
            message:error.message,
            error:true,
            data:null
        });
    };
}