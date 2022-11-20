const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: { type: String, require: true, default: "Anonymous" },
    email: { type: String, require: true }, // String is shorthand for {type: String}
    mobile_number: { type: Number },
    password: { type: String },
    address: { type: String },
    gender: { type: String, enum: ["male", "female", "others"] },
    mobile: { type: Number },
    dob: {}
});

const productSchema = new Schema({
    name :{type:String, default:"Kem palty"},
    prod_id: {type:Number},
    category: {type:String},
    tag: {type:String},
    in_stock_no: {type:Number},
    image: [{
        data: Buffer,
        contentType: String}], //as array
    description: {type: String},
    price: { type: Number },
    seller: { type: String },
    brand: { type: String },
    model: { type: Number },
    color: { type: String },
    review:[{type: String}]
});

const user = new model("users", userSchema);

const product= new model("products", productSchema);

module.exports = user;
module.exports= product;