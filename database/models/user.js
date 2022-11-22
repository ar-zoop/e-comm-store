const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const addressSchema= new Schema({
    typeOf: {type:String, enum: ["house", "office", "other"]},
    street:String,
    city: String,
    state: String,
    country: String,
    pincode: Number
})


const userSchema = new Schema({
    user_name: { type: String, require: true, default: "Anonymous" },
    // user_id:{type:Number, require: true},
    email: { type: String, require: true }, // String is shorthand for {type: String}
    password: { type: String, require: true },//Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:  match: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
    address: addressSchema,
    gender: { type: String, enum: ["male", "female", "others"] },
    mobile: { type: String, minLength: 10, maxLength: 15 },//match: "\d{3}-\d{3}-\d{4}" 
    dob: {type: Date}
});

const user = new model("users", userSchema);
module.exports = user;