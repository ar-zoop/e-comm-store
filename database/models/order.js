const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const orderSchema= new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: "users"},
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
const order = new model("orders", orderSchema);
module.exports=order;