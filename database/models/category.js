const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const categoriesSchema = new Schema({
    category_id: Number,
    category: String,
    image: {
        data: Buffer,
        contentType: String
    }    
});

const category = new model("categories", categoriesSchema);
module.exports= category;