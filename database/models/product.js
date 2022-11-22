const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const productSchema = new Schema({
    name :{type:String, require:true},
    prod_id: {type:Number, require:true},
    category: {type:String, require: true},
    tag: {type:String},
    in_stock_no: {type:Number},
    image: [{
        data: Buffer,
        contentType: String}], //as array
        description: {type: String},
        price: { type: Number, require: true },
        seller: { type: String, require: true },
        brand: { type: String, require: true },
    model: { type: Number },
    color: { type: String },
    review:[{type: String}]
});
const product= new model("products", productSchema);
module.exports= product;
