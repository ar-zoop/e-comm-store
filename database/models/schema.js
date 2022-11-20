const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: { type: String, require: true, default: "Anonymous" },
    email: { type: String, require: true }, // String is shorthand for {type: String}
    mobile_number: { type: Number },
    password: { type: String, require: true, match: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" },//Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
    address: String,
    gender: { type: String, enum: ["male", "female", "others"] },
    mobile: { type: String, minLength:10, maxLength:10, match: "/d{3}-/d{3}-/d{4}" },
    dob: {type: Date}
});

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

const orderSchema= new Schema({
    name: { type: String, require: true },
    product_id: { type: Number, require: true },
    order_placed_date :{type: Date, require: true},
    status : {type:String, enum:["Successful", "Cancelled","In transit","Arriving","Shipped", "Order confirmed","Delivered", "Unsuccessful" ]},
    price: { type: Number, require: true },
    order_id: { type: Number, require: true },
    seller: { type: String, require: true }, 
    ship_to_address:String,
    invoice: {data: Buffer, contentType: String },
    payment_method :{type:String, enum:["COD", "Online Banking", "UPI Apps", "Wallet", "EMI", "Card"]}
});

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

const categoriesSchema = new Schema({
    category:[{
        subcategory: {type: String}
    }]

})

const user = new model("users", userSchema);
const category = new model("categoriesSchema", categoriesSchema);
const cart = new model("cart", cartSchema);
const product= new model("products", productSchema);

module.exports = user;
module.exports= product;
module.exports= cart;
module.exports= category;