const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const cartSchema= new Schema({
    products:[{
        name: {type: String, require:true},
        original_price: { type: Number, min: 1, require: true },
        discount_price :{type:Number},
        qty: { type: Number, min: 1, require: true },
        description:{type:String}
    }],
    sub_total: { type:Number, require: true }
})

const cart = new model("cart", cartSchema);
module.exports= cart;